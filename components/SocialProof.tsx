
const companies = [
  {
    name: "Google",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="100"
        height="50"
      >
        <path
          fill="#FFC107"
          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
        />
        <path
          fill="#FF3D00"
          d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
        />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="100"
        height="50"
      >
        <path fill="#ff5722" d="M6 6H22V22H6z" />
        <path fill="#4caf50" d="M26 6H42V22H26z" />
        <path fill="#ffc107" d="M6 26H22V42H6z" />
        <path fill="#03a9f4" d="M26 26H42V42H26z" />
      </svg>
    ),
  },
  {
    name: "Apple",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="100"
        height="50"
      >
        <path
          fill="#283593"
          d="M24 4c-5.523 0-10 4.477-10 10v20c0 5.523 4.477 10 10 10s10-4.477 10-10V14c0-5.523-4.477-10-10-10zm0 4a6 6 0 016 6v20a6 6 0 01-12 0V14a6 6 0 016-6z"
        />
        <path
          fill="#283593"
          d="M24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 2c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
        />
      </svg>
    ),
  },
];

const awards = [
  { name: "Winner of 6+ Hackathons", details: "Including 2 State-level and 4 College-level competitions." },
  { name: "Smart India Hackathon (SIH) Qualifier", organization: "Government of India Initiative" },
  { name: "Optimized API Performance", details: "Enhanced API response times by 15%." },
  { name: "AI-Driven Innovations", details: "Developed intelligent solutions for agriculture and education." },
  { name: "Open-Source Contributor", details: "Contributed to key projects and maintained a high rating on competitive coding platforms." }
];


export default function SocialProof() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Companies I&quot;ve Worked With
      </h3>
      <div className="flex justify-center items-center space-x-8 mb-12">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center w-24 h-16"
          >
            {company.logo}
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Awards & Recognition
      </h3>
      <ul className="list-disc list-inside max-w-md mx-auto text-gray-700 dark:text-gray-300">
        {awards.map((award) => (
          <li key={award.name} className="mb-2">
            <span className="font-semibold">{award.name}</span>
            {award.organization ? ` - ${award.organization}` : ""}
            {award.details ? ` (${award.details})` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}