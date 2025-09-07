export type TooltipProps = {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    name?: string;
    color?: string;
  }>;
  label?: string;
};
