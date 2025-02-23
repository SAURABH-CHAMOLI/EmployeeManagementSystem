const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "aarav@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Project Report",
        "taskDescription": "Complete the project report for Q1.",
        "taskDate": "2025-02-10",
        "taskCategory": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Schedule a meeting with the client.",
        "taskDate": "2025-02-12",
        "taskCategory": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Fix bugs",
        "taskDescription": "Resolve bugs reported in issue tracker",
        "taskDate": "2024-10-14",
        "taskCategory": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
    }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Neha",
    "email": "neha@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review the code for the new feature.",
        "taskDate": "2025-02-11",
        "taskCategory": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for performance.",
        "taskDate": "2025-02-15",
        "taskCategory": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
    ],
    "taskNumber": { "active": 1,
    "newTask": 0,
    "completed": 1,
    "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "rohan@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "App Deployment",
        "taskDescription": "Deploy the new version of the app.",
        "taskDate": "2025-02-14",
        "taskCategory": "Deployment",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Performance Testing",
        "taskDescription": "Conduct performance testing for the new update.",
        "taskDate": "2025-02-16",
        "taskCategory": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Testing",
        "taskDescription": "Test the latest build for bugs",
        "taskDate": "2024-10-08",
        "taskCategory": "QA",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
    }
    ],
    "taskNumber": { "active": 2,
    "newTask": 1,
    "completed": 1,
    "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "priya@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "UI Redesign",
        "taskDescription": "Work on the UI/UX redesign.",
        "taskDate": "2025-02-17",
        "taskCategory": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Set up CI/CD",
        "taskDescription": "Implement continuous integration pipeline",
        "taskDate": "2024-10-11",
        "taskCategory": "DevOps",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
    }

    ],
    "taskNumber": { "active": 2,
    "newTask": 1,
    "completed": 0,
    "failed": 0 }
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "vikram@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct a security audit for the system.",
        "taskDate": "2025-02-19",
        "taskCategory": "Security",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "API Integration",
        "taskDescription": "Integrate the new API into the system.",
        "taskDate": "2025-02-22",
        "taskCategory": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "User Feedback Analysis",
        "taskDescription": "Analyze user feedback from the latest release.",
        "taskDate": "2025-02-25",
        "taskCategory": "Analytics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": { "active": 2,
    "newTask": 1,
    "completed": 1,
    "failed": 0 }
  }
];


const admin = [{ "id": 1, "email": "admin@example.com", "password": "123" }]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}