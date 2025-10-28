export interface HistoryLog {
  id: string;
  shopify_id: string;
  step: number;
  created_at?: string;
  updated_at: string;
  logs: any[];
}
