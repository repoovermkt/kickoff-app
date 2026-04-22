import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateKickoffDto } from './dto/create-kickoff.dto';
import { Client } from './entities/clients.entity';
import { Company } from './entities/companies.entity';
import { Kickoff } from './entities/kickoff.entity';

type KickoffFull = {
  id: string;
  nome_completo: string;
  nome_empresa: string;
  momento_negocio?: string;
  expectativas?: string;
  dores_publico?: string;
  objecoes?: string;
  created_at: Date;
};

@Injectable()
export class KickoffService {
  constructor(private dataSource: DataSource) {}

  async create(data: CreateKickoffDto) {
    return this.dataSource.transaction(async (manager) => {
      const client = await manager.save(Client, {
        nome_completo: data.nome_completo,
        cargo: data.cargo,
        data_aniversario: data.data_aniversario,
      });

      const company = await manager.save(Company, {
        nome_empresa: data.nome_empresa,
        cidade_empresa: data.cidade_empresa,
        tempo_mercado: data.tempo_mercado,
        momento_negocio: data.momento_negocio,
      });

      const kickoff = await manager.save(Kickoff, {
        client_id: client.id,
        company_id: company.id,
        expectativas: data.expectativas,
        dores_publico: data.dores_publico,
        objecoes: data.objecoes,
      });

      return { client, company, kickoff };
    });
  }

  async findAll(): Promise<Kickoff[]> {
    return this.dataSource.getRepository(Kickoff).find({
      order: { created_at: 'DESC' },
    });
  }

  async findAllDetailed(): Promise<KickoffFull[]> {
    const result = await this.dataSource.query(`
      SELECT 
        k.id,
        k.created_at,
        c.nome_completo,
        co.nome_empresa,
        co.momento_negocio,
        k.expectativas,
        k.dores_publico,
        k.objecoes
      FROM kickoffs k
      LEFT JOIN clients c ON k.client_id = c.id
      LEFT JOIN companies co ON k.company_id = co.id
      ORDER BY k.created_at DESC
    `);

    return result as KickoffFull[];
  }

  async findOneFull(id: string) {
    const kickoff = (await this.dataSource.query(
      `
      SELECT 
        k.*,
        c.nome_completo,
        c.cargo,
        co.nome_empresa,
        co.momento_negocio
      FROM kickoffs k
      LEFT JOIN clients c ON k.client_id = c.id
      LEFT JOIN companies co ON k.company_id = co.id
      WHERE k.id = $1
    `,
      [id],
    )) as any[];

    if (!kickoff.length) return null;

    const revenues = await this.dataSource.query(
      `SELECT * FROM revenues WHERE kickoff_id = $1 ORDER BY mes_ordem`,
      [id],
    );

    const tools = await this.dataSource.query(
      `SELECT ferramenta FROM digital_tools WHERE kickoff_id = $1`,
      [id],
    );

    const channels = await this.dataSource.query(
      `SELECT canal FROM public_channels WHERE kickoff_id = $1`,
      [id],
    );

    const personality = await this.dataSource.query(
      `SELECT caracteristica FROM brand_personality WHERE kickoff_id = $1`,
      [id],
    );

    const accesses = await this.dataSource.query(
      `SELECT plataforma, login, senha, url FROM platform_accesses WHERE kickoff_id = $1`,
      [id],
    );

    return {
      ...kickoff[0],
      revenues,
      ferramentas: tools.map((t: any) => t.ferramenta),
      canais: channels.map((c: any) => c.canal),
      personalidade: personality.map((p: any) => p.caracteristica),
      acessos: accesses,
    };
  }
}
