import { BtcChartChunks } from "./enums";
export type TChartDataPoint = [number, number];
export type TAllChartData = {
  [BtcChartChunks.Over1k]: TChartDataPoint[];
  [BtcChartChunks.Over10k]: TChartDataPoint[];
  [BtcChartChunks.Over100k]: TChartDataPoint[];
  [BtcChartChunks.Over1M]: TChartDataPoint[];
  [BtcChartChunks.Over10M]: TChartDataPoint[];
};
