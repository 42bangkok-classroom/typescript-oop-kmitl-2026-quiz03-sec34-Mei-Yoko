export class OnlineCourse {
    courseName: string;
    maxStudents: number;
    private enrolledStudents: number = 0;
    private isOpen: boolean = true;

    constructor(courseName: string, maxStudents: number) {
        this.courseName = courseName;
        this.maxStudents = maxStudents;
    }

    private canEnroll(): boolean{
        return this.isOpen && this.enrolledStudents < this.maxStudents;
    }
    enroll(): boolean {
        if (this.canEnroll()) {
            this.enrolledStudents++;
            return true;
        }
        return false;
    }

    closeCourse(): void {
        this.isOpen = false;
    }

    getAvailableSeats(): number {
        return this.maxStudents - this.enrolledStudents;
    }

    getCourseStatus(): string {
        return this.isOpen ? "Open" : "Closed";
    }
}
    



