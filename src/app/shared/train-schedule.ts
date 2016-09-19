export interface TrainSchedule {
    origin: string,
    destination: string,
    scheduledAt: number,
    delayedFor: number,
    trackNum: number,
    currentStatus: string
}
