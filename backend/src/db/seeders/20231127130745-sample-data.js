const db = require('../models');
const Users = db.users;

const Applications = db.applications;

const JobPostings = db.job_postings;

const Workflows = db.workflows;

const Organizations = db.organizations;

const ApplicationsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Hired',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'InterviewScheduled',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Rejected',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Hired',

    // type code here for "relation_one" field
  },
];

const JobPostingsData = [
  {
    title: 'Software Engineer',

    description: 'Develop and maintain software applications.',

    // type code here for "relation_one" field

    status: 'Closed',

    // type code here for "relation_one" field
  },

  {
    title: 'Data Analyst',

    description: 'Analyze data and generate insights.',

    // type code here for "relation_one" field

    status: 'Closed',

    // type code here for "relation_one" field
  },

  {
    title: 'Marketing Manager',

    description: 'Lead the marketing team and strategy.',

    // type code here for "relation_one" field

    status: 'Closed',

    // type code here for "relation_one" field
  },

  {
    title: 'Product Manager',

    description: 'Oversee product development and strategy.',

    // type code here for "relation_one" field

    status: 'Closed',

    // type code here for "relation_one" field
  },
];

const WorkflowsData = [
  {
    name: 'Job Posting Notifications',

    description:
      'When a new job is posted, email notifications should be sent to relevant recruiters and managers.',

    type: 'InterviewScheduling',

    // type code here for "relation_one" field
  },

  {
    name: 'Application Acknowledgement',

    description:
      'When an application is received, an acknowledgement email should be automatically sent to the applicant.',

    type: 'InterviewScheduling',

    // type code here for "relation_one" field
  },

  {
    name: 'Interview Scheduling',

    description:
      'Once an application is shortlisted, an automated scheduling system should send interview invites to both the candidate and the interview panel.',

    type: 'ApplicationAcknowledgement',

    // type code here for "relation_one" field
  },

  {
    name: 'Status Updates',

    description:
      'Applicants should receive automated updates on their application status.',

    type: 'ComplianceChecks',

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Acme Corp',
  },

  {
    name: 'Beta Inc',
  },

  {
    name: 'Gamma LLC',
  },

  {
    name: 'Delta Ltd',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }
}

async function associateApplicationWithApplicant() {
  const relatedApplicant0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Application0 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Application0?.setApplicant) {
    await Application0.setApplicant(relatedApplicant0);
  }

  const relatedApplicant1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Application1 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Application1?.setApplicant) {
    await Application1.setApplicant(relatedApplicant1);
  }

  const relatedApplicant2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Application2 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Application2?.setApplicant) {
    await Application2.setApplicant(relatedApplicant2);
  }

  const relatedApplicant3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Application3 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Application3?.setApplicant) {
    await Application3.setApplicant(relatedApplicant3);
  }
}

async function associateApplicationWithJob() {
  const relatedJob0 = await JobPostings.findOne({
    offset: Math.floor(Math.random() * (await JobPostings.count())),
  });
  const Application0 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Application0?.setJob) {
    await Application0.setJob(relatedJob0);
  }

  const relatedJob1 = await JobPostings.findOne({
    offset: Math.floor(Math.random() * (await JobPostings.count())),
  });
  const Application1 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Application1?.setJob) {
    await Application1.setJob(relatedJob1);
  }

  const relatedJob2 = await JobPostings.findOne({
    offset: Math.floor(Math.random() * (await JobPostings.count())),
  });
  const Application2 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Application2?.setJob) {
    await Application2.setJob(relatedJob2);
  }

  const relatedJob3 = await JobPostings.findOne({
    offset: Math.floor(Math.random() * (await JobPostings.count())),
  });
  const Application3 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Application3?.setJob) {
    await Application3.setJob(relatedJob3);
  }
}

async function associateApplicationWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Application0 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Application0?.setOrganization) {
    await Application0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Application1 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Application1?.setOrganization) {
    await Application1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Application2 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Application2?.setOrganization) {
    await Application2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Application3 = await Applications.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Application3?.setOrganization) {
    await Application3.setOrganization(relatedOrganization3);
  }
}

async function associateJobPostingWithPosted_by() {
  const relatedPosted_by0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const JobPosting0 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (JobPosting0?.setPosted_by) {
    await JobPosting0.setPosted_by(relatedPosted_by0);
  }

  const relatedPosted_by1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const JobPosting1 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (JobPosting1?.setPosted_by) {
    await JobPosting1.setPosted_by(relatedPosted_by1);
  }

  const relatedPosted_by2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const JobPosting2 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (JobPosting2?.setPosted_by) {
    await JobPosting2.setPosted_by(relatedPosted_by2);
  }

  const relatedPosted_by3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const JobPosting3 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (JobPosting3?.setPosted_by) {
    await JobPosting3.setPosted_by(relatedPosted_by3);
  }
}

async function associateJobPostingWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const JobPosting0 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (JobPosting0?.setOrganization) {
    await JobPosting0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const JobPosting1 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (JobPosting1?.setOrganization) {
    await JobPosting1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const JobPosting2 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (JobPosting2?.setOrganization) {
    await JobPosting2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const JobPosting3 = await JobPostings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (JobPosting3?.setOrganization) {
    await JobPosting3.setOrganization(relatedOrganization3);
  }
}

async function associateWorkflowWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Workflow0 = await Workflows.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Workflow0?.setOrganization) {
    await Workflow0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Workflow1 = await Workflows.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Workflow1?.setOrganization) {
    await Workflow1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Workflow2 = await Workflows.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Workflow2?.setOrganization) {
    await Workflow2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Workflow3 = await Workflows.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Workflow3?.setOrganization) {
    await Workflow3.setOrganization(relatedOrganization3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Applications.bulkCreate(ApplicationsData);

    await JobPostings.bulkCreate(JobPostingsData);

    await Workflows.bulkCreate(WorkflowsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateApplicationWithApplicant(),

      await associateApplicationWithJob(),

      await associateApplicationWithOrganization(),

      await associateJobPostingWithPosted_by(),

      await associateJobPostingWithOrganization(),

      await associateWorkflowWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('applications', null, {});

    await queryInterface.bulkDelete('job_postings', null, {});

    await queryInterface.bulkDelete('workflows', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
