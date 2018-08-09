import Job from "../../models/Job.js"

let jobs = []

export default class JobService {
  constructor() {

  }

  getJobs() {
    let jobsCopy = []

    jobs.forEach(job => {
      jobsCopy.push(new Job(
        job.title,
        job.hours,
        job.pay,
        job.benefits,
        job.address
      ))
    })
    return jobsCopy
  }

  addJob(formData) {
    let newJob = new Job(
      formData.title.value,
      formData.hours.value,
      formData.pay.value,
      formData.benefits.value,
      formData.address.value
    )
    jobs.push(newJob)
    console.log(newJob)
  }
}