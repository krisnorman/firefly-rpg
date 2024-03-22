
export interface IAchievement {
    TotalAchievementPoints: number;
    PlotPoints: number;
    AchievementPoints: number;
}

export class Achievement implements IAchievement {
    TotalAchievementPoints: number = 0;
    PlotPoints: number = 0;
    AchievementPoints: number = 0;

}
