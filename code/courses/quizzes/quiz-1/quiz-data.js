const questionBank = [
  {
    question: "How are things organized in a directory server?",
    answers: [
      { text: "By a hierarchical model of objects and containers", correct: true },
      { text: "By random allocation of user accounts", correct: false },
      { text: "By IP addresses and subnets", correct: false },
      { text: "By alphabetical sorting of usernames", correct: false }
    ]
  },
  {
    question: "In order to authenticate user accounts against AD, what must be done to the computer first?",
    answers: [
      { text: "Join it to the domain", correct: true },
      { text: "Install Active Directory on the computer", correct: false },
      { text: "Set up a local user account with the same username", correct: false },
      { text: "Connect the computer to the internet", correct: false }
    ]
  },
  {
    question: "What would you use if you wanted to set a default wallpaper background for all machines in your company, but still wanted users to be able to set their own wallpaper?",
    answers: [
      { text: "A preference", correct: true },
      { text: "A policy", correct: false },
      { text: "A registry key", correct: false },
      { text: "A group membership", correct: false }
    ]
  },
  // True/False Questions
  {
    question: "Directory services only store information about users and computers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Directories use hierarchical structures to organize and store data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects in a directory inherit attributes only if they are manually assigned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP operates over TCP port 389.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Pruning and grafting allow moving the root of a directory to a different location.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Multiple Choice Questions (MCQs)
  {
    question: "Which of the following is NOT a function of directory services?",
    answers: [
      { text: "A. Centralized authentication for users and systems", correct: false },
      { text: "B. Facilitating single sign-on for applications", correct: false },
      { text: "C. Providing a hierarchical structure for data storage", correct: false },
      { text: "D. Running operating system updates", correct: true },
      { text: "E. Offering granularity of administrative control", correct: false },
    ],
  },
  {
    question: "What distinguishes a leaf object in a directory?",
    answers: [
      { text: "A. It has no parent object.", correct: false },
      { text: "B. It cannot contain other objects.", correct: true },
      { text: "C. It defines schema attributes.", correct: false },
      { text: "D. It represents the root of the directory.", correct: false },
      { text: "E. It inherits all attributes of the directory.", correct: false },
    ],
  },
  {
    question: "Which of the following describes pruning and grafting in a directory?",
    answers: [
      { text: "A. Creating new containers for objects", correct: false },
      { text: "B. Allowing a directory to span multiple geographical locations", correct: false },
      { text: "C. Moving objects between different locations in the directory tree", correct: true },
      { text: "D. Restricting access to specific parts of a directory", correct: false },
      { text: "E. Duplicating attributes of directory objects", correct: false },
    ],
  },
  {
    question: "Which protocol is used for querying and modifying directory information?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. HTTP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "In an LDAP directory naming convention, what does ou represent?",
    answers: [
      { text: "A. Organizational Name", correct: false },
      { text: "B. Organizational Unit", correct: true },
      { text: "C. Organization User", correct: false },
      { text: "D. Overall Unit", correct: false },
      { text: "E. Operating User", correct: false },
    ],
  },
  {
    question: "Directory services only store information about users and computers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Directories use hierarchical structures to organize and store data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects in a directory inherit attributes only if they are manually assigned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP operates over TCP port 389.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Pruning and grafting allow moving the root of a directory to a different location.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Distinguished Names (DNs) in a directory can be either absolute or relative.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A directory's schema defines the allowable structure and attributes of objects.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "LDAP does not support modifying information in a directory.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Objects in a directory always retain their inherited attributes, even when moved.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Active Directory uses LDAP as its native directory access protocol.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "An organizational unit (OU) can contain leaf objects, but not other OUs.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Multiple Choice Questions (MCQs)
  {
    question: "Which of the following is NOT a function of directory services?",
    answers: [
      { text: "A. Centralized authentication for users and systems", correct: false },
      { text: "B. Facilitating single sign-on for applications", correct: false },
      { text: "C. Providing a hierarchical structure for data storage", correct: false },
      { text: "D. Running operating system updates", correct: true },
      { text: "E. Offering granularity of administrative control", correct: false },
    ],
  },
  {
    question: "What distinguishes a leaf object in a directory?",
    answers: [
      { text: "A. It has no parent object.", correct: false },
      { text: "B. It cannot contain other objects.", correct: true },
      { text: "C. It defines schema attributes.", correct: false },
      { text: "D. It represents the root of the directory.", correct: false },
      { text: "E. It inherits all attributes of the directory.", correct: false },
    ],
  },
  {
    question: "Which of the following describes pruning and grafting in a directory?",
    answers: [
      { text: "A. Creating new containers for objects", correct: false },
      { text: "B. Allowing a directory to span multiple geographical locations", correct: false },
      { text: "C. Moving objects between different locations in the directory tree", correct: true },
      { text: "D. Restricting access to specific parts of a directory", correct: false },
      { text: "E. Duplicating attributes of directory objects", correct: false },
    ],
  },
  {
    question: "Which protocol is used for querying and modifying directory information?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. HTTP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "In an LDAP directory naming convention, what does ou represent?",
    answers: [
      { text: "A. Organizational Name", correct: false },
      { text: "B. Organizational Unit", correct: true },
      { text: "C. Organization User", correct: false },
      { text: "D. Overall Unit", correct: false },
      { text: "E. Operating User", correct: false },
    ],
  },
  {
    question: "What is an example of a directory protocol?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. DHCP", correct: false },
      { text: "D. TCP/IP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "Which of the following operations is NOT typically supported by LDAP?",
    answers: [
      { text: "A. Bind", correct: false },
      { text: "B. Add", correct: false },
      { text: "C. Delete", correct: false },
      { text: "D. Modify", correct: false },
      { text: "E. Backup", correct: true },
    ],
  },
  {
    question: "What type of object is an organizational unit (OU) in a directory?",
    answers: [
      { text: "A. A leaf object", correct: false },
      { text: "B. A container object", correct: true },
      { text: "C. A schema object", correct: false },
      { text: "D. A root object", correct: false },
      { text: "E. A standalone object", correct: false },
    ],
  },
  {
    question: "Which of the following is a characteristic of directory-enabled applications?",
    answers: [
      { text: "A. They rely on hierarchical databases.", correct: false },
      { text: "B. They do not interact with external authentication systems.", correct: false },
      { text: "C. They authenticate users using directory information.", correct: true },
      { text: "D. They avoid using single sign-on methods.", correct: false },
      { text: "E. They require manual configuration of each user.", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT an attribute of a printer object in a directory?",
    answers: [
      { text: "A. Color or black-and-white capability", correct: false },
      { text: "B. Available paper sizes", correct: false },
      { text: "C. IP address of the printer", correct: true },
      { text: "D. Duplex printing capability", correct: false },
      { text: "E. Model and make", correct: false },
    ],
  },
  // Multiple Choice Questions
{
  question: "A company implements a directory service for centralized authentication. Which scenario demonstrates the correct application of this feature?",
  answers: [
    { text: "A. Users log in once and gain access to multiple applications without additional credentials.", correct: true },
    { text: "B. Administrators configure unique credentials for each user across all systems.", correct: false },
    { text: "C. The directory service is only used for network printer configurations.", correct: false },
    { text: "D. The directory service blocks all users not manually added to the firewall.", correct: false },
    { text: "E. The service operates independently of all external applications.", correct: false },
  ],
},
{
  question: "An administrator is tasked with enabling secure VPN access for remote employees. Which directory-enabled application functionality is most relevant?",
  answers: [
    { text: "A. Granularity of administrative control", correct: false },
    { text: "B. Storage of digital certificates for authentication", correct: true },
    { text: "C. Moving directory objects between locations", correct: false },
    { text: "D. Schema modification for container objects", correct: false },
    { text: "E. Restricting user access to leaf objects only", correct: false },
  ],
},
{
  question: "A network engineer is designing a directory structure for a multinational corporation. What approach should be taken to accommodate geographical locations effectively?",
  answers: [
    { text: "A. Use a functional directory structure with departments as roots.", correct: false },
    { text: "B. Employ a flat directory structure to simplify the design.", correct: false },
    { text: "C. Create separate directory trees for each location.", correct: false },
    { text: "D. Arrange the directory hierarchically by country and region.", correct: true },
    { text: "E. Define a single root with no organizational units for simplicity.", correct: false },
  ],
},
{
  question: "A user reports difficulty logging into a shared application. The application relies on the directory for authentication. What is the most likely cause?",
  answers: [
    { text: "A. The user's account is not located in the directory tree.", correct: true },
    { text: "B. The directory service does not support single sign-on.", correct: false },
    { text: "C. The application does not query the directory for user credentials.", correct: false },
    { text: "D. The directory schema is improperly configured.", correct: false },
    { text: "E. The user is attempting to log in from an unauthorized device.", correct: false },
  ],
},
{
  question: "An organization wants to simplify user account naming conventions while maintaining uniqueness within each department. What configuration should the administrator implement?",
  answers: [
    { text: "A. Use absolute distinguished names (DNs) for all accounts.", correct: false },
    { text: "B. Define relative distinguished names (RDNs) based on department-specific contexts.", correct: true },
    { text: "C. Configure one schema for the entire directory with no subdivisions.", correct: false },
    { text: "D. Limit inheritance of attributes to root objects only.", correct: false },
    { text: "E. Assign duplicate names to accounts across different locations.", correct: false },
  ],
},

// True/False Questions
{
  question: "Directories provide a single logical view of all network resources regardless of their physical locations.",
  answers: [
    { text: "True", correct: true },
    { text: "False", correct: false },
  ],
},
{
  question: "In a directory, granularity of administrative control means that all administrators have full control over the entire directory.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true },
  ],
},
{
  question: "Pruning and grafting enable the restructuring of directory trees without affecting the objects' inherited attributes.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true },
  ],
},
{
  question: "LDAP is designed to operate exclusively over UDP.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true },
  ],
},
{
  question: "Distinguished Names (DNs) include a complete path to the object in the directory tree.",
  answers: [
    { text: "True", correct: true },
    { text: "False", correct: false },
  ],
},
{
  question: "Leaf objects in a directory cannot be further divided into container objects.",
  answers: [
    { text: "True", correct: true },
    { text: "False", correct: false },
  ],
},
{
  question: "Attributes of directory objects are defined by the directory schema.",
  answers: [
    { text: "True", correct: true },
    { text: "False", correct: false },
  ],
},
{
  question: "Relative distinguished names (RDNs) are fully specified paths that begin at the root of the directory.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true },
  ],
},
{
  question: "Active Directory supports integration with Kerberos for authentication.",
  answers: [
    { text: "True", correct: true },
    { text: "False", correct: false },
  ],
},
{
  question: "A directory service does not allow for multiple authentication methods to be exposed to third-party applications.",
  answers: [
    { text: "True", correct: false },
    { text: "False", correct: true },
  ],
},

];

