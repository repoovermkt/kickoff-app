import { IsString, IsOptional } from 'class-validator';

export class CreateKickoffDto {
  @IsString()
  nome_completo!: string;

  @IsOptional()
  @IsString()
  cargo?: string;

  @IsOptional()
  @IsString()
  data_aniversario?: string;

  @IsString()
  nome_empresa!: string;

  @IsOptional()
  @IsString()
  cidade_empresa?: string;

  @IsOptional()
  @IsString()
  tempo_mercado?: string;

  @IsOptional()
  @IsString()
  momento_negocio?: string;

  @IsOptional() @IsString() expectativas?: string;
  @IsOptional() @IsString() outros_envolvidos?: string;
  @IsOptional() @IsString() missao_visao?: string;
  @IsOptional() @IsString() definicao_empresa?: string;
  @IsOptional() @IsString() metas_performance?: string;

  @IsOptional() @IsString() swot_forcas?: string;
  @IsOptional() @IsString() swot_fraquezas?: string;
  @IsOptional() @IsString() swot_oportunidades?: string;
  @IsOptional() @IsString() swot_ameacas?: string;

  @IsOptional() @IsString() produtos_servicos?: string;
  @IsOptional() ticket_medio?: number;
  @IsOptional() @IsString() recorrencia?: string;
  @IsOptional() @IsString() dores_produto?: string;
  @IsOptional() @IsString() ofertas_validadas?: string;
  @IsOptional() @IsString() concorrentes?: string;

  @IsOptional() @IsString() processo_vendas?: string;
  @IsOptional() @IsString() time_comercial?: string;
  @IsOptional() @IsString() tempo_decisao_lead?: string;
  @IsOptional() mat?: number;
  @IsOptional() @IsString() rel?: string;

  @IsOptional() @IsString() link_dashboard?: string;
  @IsOptional() @IsString() criterios_lead?: string;

  @IsOptional() @IsString() faixa_etaria?: string;
  @IsOptional() @IsString() regiao_atuacao?: string;
  @IsOptional() @IsString() cls?: string;
  @IsOptional() @IsString() gen?: string;

  @IsOptional() @IsString() dores_publico?: string;
  @IsOptional() @IsString() desejo_publico?: string;
  @IsOptional() @IsString() objecoes?: string;

  @IsOptional() @IsString() link_brandbook?: string;
  @IsOptional() @IsString() link_fotos?: string;

  @IsOptional() @IsString() personalidade_outros?: string;
  @IsOptional() @IsString() personalidade_top3?: string;

  @IsOptional() @IsString() cores_usar?: string;
  @IsOptional() @IsString() cores_nao_usar?: string;

  @IsOptional() @IsString() referencias?: string;
  @IsOptional() @IsString() consideracoes_finais?: string;

  // faturamento
  @IsOptional() fat_mes1?: number;
  @IsOptional() fat_mes2?: number;
  @IsOptional() fat_mes3?: number;
  @IsOptional() fat_mes4?: number;
  @IsOptional() fat_mes5?: number;
  @IsOptional() fat_mes6?: number;

  // arrays (string separada por vírgula)
  @IsOptional() @IsString() ferramentas_digitais?: string;
  @IsOptional() @IsString() canais_publico?: string;
  @IsOptional() @IsString() personalidade?: string;

  // acessos
  @IsOptional() gmail_login?: string;
  @IsOptional() gmail_senha?: string;
  @IsOptional() gmail_url?: string;

  @IsOptional() ig_usuario?: string;
  @IsOptional() ig_senha?: string;
  @IsOptional() ig_url?: string;

  @IsOptional() fb_login?: string;
  @IsOptional() fb_senha?: string;
  @IsOptional() fb_url?: string;

  @IsOptional() tt_usuario?: string;
  @IsOptional() tt_senha?: string;
  @IsOptional() tt_url?: string;

  @IsOptional() wp_usuario?: string;
  @IsOptional() wp_senha?: string;
  @IsOptional() wp_url?: string;

  @IsOptional() host_login?: string;
  @IsOptional() host_senha?: string;
  @IsOptional() host_url?: string;

  @IsOptional() ecomm_login?: string;
  @IsOptional() ecomm_senha?: string;
  @IsOptional() ecomm_url?: string;

  @IsOptional() crm_login?: string;
  @IsOptional() crm_senha?: string;
  @IsOptional() crm_url?: string;
}
