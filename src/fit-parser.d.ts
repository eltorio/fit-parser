export interface Options {
    force?: boolean;
    speedUnit?: string;
    lengthUnit?: string;
    temperatureUnit?: string;
    elapsedRecordField?: boolean;
    mode?: string;
}

export default class FitParser {
    constructor(options: Options)
    parse(filename: string, callback: (error: string | null, data: FitData) => void)
}

export interface FitData {
    protocolVersion: number;
    profileVersion: number;
    file_creator: { software_version: number; },
    activity: Activity;
}

export interface Activity {
    timestamp: string;
    total_timer_time: Number;
    local_timestamp: string;
    num_sessions: Number;
    type: string;
    event: string;
    event_type: string;
    sessions: Session[];
    events: Event[];
    hrv: any[];
    device_infos: DeviceInfo[];
    developer_data_ids: any[];
    field_descriptions: any[];
    sports: any[];
}

export interface SessionBase {

    timestamp: string;
    start_time: string;
    start_position_lat: Number;
    start_position_long: Number;
    total_elapsed_time: Number;
    total_timer_time: Number;
    total_distance: Number;
    total_cycles: Number;
    message_index: {
        0: boolean;
        value: Number;
        reserved: boolean;
        selected: boolean;
    }
    total_calories: Number;
    avg_speed: Number;
    first_lap_index: Number;
    num_laps: Number;
    event: string;
    event_type: string;
}

export interface Session extends SessionBase {
    sport: string;
    sub_sport: string;
    trigger: string;
    laps: Lap[];
}

export interface Lap extends SessionBase {
    lap_trigger: string
    records: Record[];
}

export interface Record {
    timestamp: string;
    elapsed_time: Number;
    timer_time: Number;
    position_lat: Number;
    position_long: Number;
    distance: Number;
    speed: Number;
    heart_rate: Number;
    cadence: Number;
}

export interface Event {
    timestamp: string;
    data: Number;
    event: string;
    event_type: string;
    event_group: Number;
}

export interface DeviceInfo {
    timestamp: string;
    serial_number: Number;
    manufacturer: string;
    product: Number;
    software_version: Number;
    device_index: Number;
}
