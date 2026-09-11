export interface StatConfig {
  readonly display: string | null;
  readonly countTo: number | null;
  readonly suffix: string;
}

export const statConfigs: readonly StatConfig[] = [
  { display: null, countTo: null, suffix: "" },
  { display: null, countTo: 100, suffix: "%" },
  { display: null, countTo: 7, suffix: "" },
  { display: null, countTo: null, suffix: "" },
];
