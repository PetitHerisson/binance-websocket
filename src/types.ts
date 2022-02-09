export interface StateType {
    streams: StreamData[];
    status: boolean;
}

export interface StreamData {
    streamName: string;
    ask: number[];
    bid: number[];
    time: string[];
    open: number[];
    close: number[];
}

export interface PayloadType {
    streamName: string;
    ask: number;
    bid: number;
    time: string;
    open: number;
    close: number;
}

export interface LineChartProps {
    time: string[];
    title: string;
    dataset1: number[];
    dataset2: number[];
    label1: string;
    label2: string;
}