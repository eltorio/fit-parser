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
    records: Record[];
}

export interface Activity {
    timestamp: Date;
    total_timer_time: number;
    local_timestamp: string;
    num_sessions: number;
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
    start_position_lat: number;
    start_position_long: number;
    total_elapsed_time: number;
    total_timer_time: number;
    total_distance: number;
    total_cycles: number;
    message_index: {
        0: boolean;
        value: number;
        reserved: boolean;
        selected: boolean;
    }
    total_calories: number;
    avg_speed: number;
    first_lap_index: number;
    num_laps: number;
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
    altitude: number,
    timestamp: Date;
    elapsed_time: number;
    enhanced_altitude: number;
    timer_time: number;
    position_lat: number;
    position_long: number;
    distance: number;
    speed: number;
    heart_rate: number;
    cadence: number;
}

export interface Event {
    timestamp: string;
    data: number;
    event: string;
    event_type: string;
    event_group: number;
}

export interface DeviceInfo {
    timestamp: string;
    serial_number: number;
    manufacturer: string;
    product: number;
    software_version: number;
    device_index: number;
}
