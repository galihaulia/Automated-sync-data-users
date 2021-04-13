const {
  Users,
  VerificationToken,
  Tokens,
  Profiles,
  Companies,
  Departments,
  JobTitles,
  Levels,
  Privileges,
  PrivilegeUsers,
  JobLevels,
  JobLevelUsers,
  Statuses,
  Types,
  Courses,
  CourseLevels,
  CourseStatusLogs,
  CourseByDepartments,
  CourseByEmployees,
  Categories,
  Comments,
  FGDs,
  FGDFiles,
  Questions,
  QuestionFiles,
  Answers,
  Chapters,
  Materials,
  MaterialFiles,
  MaterialSubmissions,
  SubmissionFiles,
  Quizes,
  QuizQuestions,
  Certificates,
  Notes,
  StdCompetencies,
  Competencies,
  CompetencyAreas,
  Syllabuses,
  SylCompetencies,
  SylCourses,
  Enrolls,
  EnrollActivities,
  ProgressChapters,
  ProgressMaterials,
  Banners,
  GradeScales,
  BannerCompanies,
  StdCompMaps,
  Schedules,
  Schedulees,
  ScheduleWebinars,
  LogBooks,
  Results,
  Feedbacks,
  Groups,
  Trainings,
  Notifications,
  MaterialSpeakers,
  CourseTransactions,
  CourseVariants,
  Attendances,
  RevisionAttachments,
  CourseTransactionsVariants
} = require('../models');

exports.DB_TABLES = {
  DB_USERS: Users,
  DB_VERIFICATION_TOKEN: VerificationToken,
  DB_TOKENS: Tokens,
  DB_PROFILES: Profiles,
  DB_COMPANIES: Companies,
  DB_DEPARTMENTS: Departments,
  DB_JOBTITLES: JobTitles,
  DB_LEVELS: Levels,
  DB_PRIVILEGES: Privileges,
  DB_PRIVILEGEUSERS: PrivilegeUsers,
  DB_JOBLEVELS: JobLevels,
  DB_JOBLEVELUSERS: JobLevelUsers,
  DB_STATUSES: Statuses,
  DB_TYPES: Types,
  DB_COURSES: Courses,
  DB_COURSETRANSACTIONS: CourseTransactions,
  DB_COURSEVARIANTS: CourseVariants,
  DB_COURSELEVELS: CourseLevels,
  DB_COURSESTATUSLOGS: CourseStatusLogs,
  DB_COURSEBYDEPARTMENTS: CourseByDepartments,
  DB_COURSEBYEMPLOYEES: CourseByEmployees,
  DB_CATEGORIES: Categories,
  DB_COMMENTS: Comments,
  DB_FGDS: FGDs,
  DB_FGDFILES: FGDFiles,
  DB_QUESTIONS: Questions,
  DB_QUESTIONFILES: QuestionFiles,
  DB_ANSWERS: Answers,
  DB_CHAPTERS: Chapters,
  DB_MATERIALS: Materials,
  DB_MATERIALSPEAKERS: MaterialSpeakers,
  DB_MATERIALFILES: MaterialFiles,
  DB_MATERIALSUBMISSIONS: MaterialSubmissions,
  DB_SUBMISSIONFILES: SubmissionFiles,
  DB_QUIZES: Quizes,
  DB_QUIZQUESTIONS: QuizQuestions,
  DB_CERTIFICATES: Certificates,
  DB_NOTES: Notes,
  DB_STDCOMPETENCIES : StdCompetencies,
  DB_COMPETENCIES : Competencies,
  DB_COMPETENCYAREAS : CompetencyAreas,
  DB_SYLLABUSES : Syllabuses,
  DB_SYLCOMPETENCIES : SylCompetencies,
  DB_SYLCOURSES: SylCourses,
  DB_ENROLLS: Enrolls,
  DB_ENROLLACTIVITIES: EnrollActivities,
  DB_PROGRESSCHAPTERS: ProgressChapters,
  DB_PROGRESSMATERIALS: ProgressMaterials,
  DB_BANNERS: Banners,
  DB_GRADESCALES: GradeScales,
  DB_BANNERCOMPANIES: BannerCompanies,
  DB_STDCOMPMAPS: StdCompMaps,
  DB_SCHEDULES: Schedules,
  DB_SCHEDULEES: Schedulees,
  DB_SCHEDULEWEBINARS: ScheduleWebinars,
  DB_LOGBOOKS: LogBooks,
  DB_RESULTS: Results,
  DB_FEEDBACKS: Feedbacks,
  DB_GROUPS: Groups,
  DB_TRAININGS: Trainings,
  DB_NOTIFICATIONS: Notifications,
  DB_ATTENDANCE: Attendances,
  DB_REVISIONATTACHMENTS: RevisionAttachments,
  DB_COURSETRANSACTIONSVARIANTS: CourseTransactionsVariants
};
