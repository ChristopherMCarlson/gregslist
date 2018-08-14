import Job from "../../models/Job.js"

const jobsApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/jobs',
  timeout: 3000
})

export default class JobService {
  constructor() {

  }

  getJobs(draw) {
    jobsApi.get()
      .then(res => {
        let jobs = res.data.data.map(rJ => {
          return new Job(rJ)
        })
        draw(jobs)
      })
  }

  addJob(formData, draw) {
    let newJob = new Job({
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value
    })
    jobsApi.post('', newJob)
      .then(res => {
        this.getJobs(draw)
      })
  }
}