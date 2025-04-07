import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "TESFAMICHAEL",
  lastName: "ABOSET",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "DEVOPS ENGINEER",
  avatar: `${basePath}/images/avatar.png`,
  location: "Addis Ababa, Ethiopia",
  languages: ["English", "Amharic"], // optional: Leave the array empty if you don't want to display languages
  contact: {
    email: "#",
    phone: "#"
  }
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "#", // Replace with actual LinkedIn URL
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "#",
  },
];

const home = {
  label: "Home",
  title: "Home",
  description: `Portfolio website showcasing my expertise in DevOps Engineering and Cloud Infrastructure`,
  headline: <>DevOps Engineer & Cloud Infrastructure Specialist</>,
  subline: (
    <>
      I'm a DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and Kubernetes.
      <br /> Experienced in building scalable, secure, and efficient cloud-native solutions.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, a ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Summary",
    description: "DevOps Engineer with experience in CI/CD automation, Kubernetes architecture, and infrastructure management across cloud and on-premises environments. Skilled in microservices deployment, Vault security, GitOps, and monitoring and performance across financial and other sectors."
  },
  skills: {
    display: true,
    title: "Key Skills",
    categories: [
      {
        title: "DevOps Lifecycle",
        items: [
          "Infrastructure as Code (IaC)",
          "Continuous Integration/Continuous Deployment (CI/CD)",
          "Monitoring & Logging"
        ]
      },
      {
        title: "Programming Languages",
        items: ["Golang", "Python", "Bash", "YAML"]
      },
      {
        title: "Containerization & Orchestration",
        items: ["Docker", "Kubernetes"]
      },
      {
        title: "Cloud Services",
        items: [
          "Azure (AKS, Blob Storage, VM)",
          "AWS (EKS, S3, ECS, EC2)",
          "GCP (GKE, App Engine, Cloud Run)"
        ]
      },
      {
        title: "CI/CD Tools",
        items: ["Azure Devops", "Gitlab CI/CD", "ArgoCD", "Jenkins", "Github Actions"]
      },
      {
        title: "IaC & Monitoring",
        items: ["Terraform", "Prometheus", "Grafana", "Kiali"]
      }
    ]
  },
  experience: {
    display: true,
    title: "Experience",
    roles: [
      {
        company: "Kifiya FInancial Technology PLC",
        timeframe: "Jan 2025 – Present",
        role: "DevOps Engineer",
        achievements: [
          "Managing and automating CI/CD pipelines with Jenkins, GitHub Actions, and GitLab, reducing deployment time and ensuring seamless rollouts.",
          "Overseeing 12+ microservices in multiple languages, deployed across 5 banks' on-premise servers, ensuring high availability and performance.",
          "Implemented automated HashiCorp Vault management using Ansible, securing sensitive credentials and reducing manual secret handling risks.",
          "Managing self-hosted GitLab CI/CD, container registry, optimizing image storage, and enforcing security best practices.",
          "Leading the design and implementation of Kubernetes architecture, planning migration from on-premise deployments to a scalable containerized environment."
        ]
      },
      {
        company: "Ablaze IT Labs and Engineering PLC",
        timeframe: "Apr 2024 – Jan 2025",
        role: "DevOps Engineer",
        achievements: [
          "CI/CD Optimization: Designed CI/CD pipelines in Azure DevOps, reducing deployment failures by 60% and cutting release cycles from 2 days to 3 hours.",
          "Kubernetes & Database Management: Managed 4-node AKS clusters, improving app reliability and optimizing PostgreSQL database performance by 35%.",
          "Infrastructure Provisioning: Deployed and managed Azure VMs and Azure Blob Storage, ensuring scalability and cost efficiency.",
          "Microservices Deployment: Developed and secured 10+ microservices on Azure AKS, reducing latency by 40% and improving system resilience.",
          "Team Collaboration & GitOps: Led GitOps adoption, streamlining infrastructure management and boosting deployment efficiency by 50%"
        ]
      },
      {
        company: "AddisPay Financial Technologies PLC",
        timeframe: "Dec 2023 – Sep 2024",
        role: "Jr. DevOps Engineer",
        achievements: [
          "Managed Rancher RKE2 cluster setup and management for high availability and fault tolerance.",
          "Enhanced application connectivity and security through self-hosted services like Docker, kubernetes and Istio.",
          "Automated deployments and ensured environment consistency with ArgoCD and GitLab CI/CD.",
          "Simplified service communication and enabled advanced traffic management with Istio deployment.",
          "Implemented comprehensive monitoring and observability with Prometheus, Grafana, and Kiali."
        ]
      },
      {
        company: "Hirundo AB Telecommunication VAS",
        timeframe: "Jun 2022 – Nov 2023",
        role: "IT Support Engineer",
        achievements: [
          "Configured, maintained, and optimized servers to ensure reliable performance and availability.",
          "Installed, upgraded, and troubleshoot hardware components to minimize system failures.",
          "Set up and manage enterprise-grade software and network infrastructure to enhance connectivity and system efficiency.",
          "Diagnosed and resolved software and network issues, ensuring smooth operations.",
          "Provided technical support, addressing queries from staff and clients to ensure issue resolution."
        ]
      }
    ]
  },
  education: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bachelor of Science in Electrical and Computer Engineering",
        year: "2021",
        description: "Major: Computer Engineering"
      }
    ]
  }
};

export { person, social, home, about };
