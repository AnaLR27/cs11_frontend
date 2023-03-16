export class Job {


    constructor(data){
        if (data) {
            this._id = data._id;
            this.title = data.title;
            this.company = data.company;
            this.companyName = data.companyName;
            this.location.city = data.location.city;
            this.location.country = data.location.country;
            this.salary = data.salary;
            this.jobType = data.jobType;
            this.description = data.description;
            this.logo = data.logo;
            this.applicants = data.applicants;
        }
    }
    // getLookingForJobs() {
    //     return this.isLookingForJobs ? 'yes' : 'no';
    // }

    // setLookingForJobs(isLookingForJobs) {
    //     this.isLookingForJobs = isLookingForJobs === 'yes' ? true : false;
    // }
    // getLogo() {
    //     return  this.logo ?"http://localhost:3000/api/employer/logo/" + encodeURIComponent(this.logo) : undefined;
    // }
    isAdmin() {
        return this.role === 'admin';
    }

}