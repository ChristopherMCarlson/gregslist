import JobService from "./JobService.js"

let jobService = new JobService

function drawJobs() {
  let jobs = jobService.getJobs()
  let template = ''

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    template += `
    <div class="col-sm 3">
      <p>Title: ${job.title}</p>
      <p>Hours: ${job.hours}</p>
      <p>Pay: ${job.pay}</p>
      <p>Benefits: ${job.benefits}</p>
      <p>Address: ${job.address}</p>
    </div>
    `
  }
  document.getElementById("jobs").innerHTML = template
}
export default class JobController {
  constructor() {

  }

  addJob(triggeredEvent) {
    triggeredEvent.preventDefault()
    let formData = triggeredEvent.target
    jobService.addJob(formData)
    formData.reset()
    drawJobs()
  }
}