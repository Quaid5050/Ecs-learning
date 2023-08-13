//list of subjects
const subjects = [
    { id: '1', subject: 'Mathematics', image: require('./images/math.jpg') },
    { id: '2', subject: 'Physics', image: require('./images/physics.jpg') },
    { id: '3', subject: 'Biology', image: require('./images/bio.jpg') },
    { id: '4', subject: 'English', image: require('./images/english.jpg') },
    { id: '5', subject: 'Computer Science', image: require('./images/computer.png') },
    { id: '6', subject: 'Art', image: require('./images/art.jpg') },

];

//on the basics of specific subject id units are fetch
const unitsBySubject = {
    '1': [ //SubjectId
        {
            id: 'unit1',
            unit: 'Unit 1: Numbers and Algebra',
            chapters: [ // Changed from topics
                { id: '1', name: 'Introduction to Numbers' },
                { id: '2', name: 'Basic Algebraic Equations' },
                // ... Other chapters
            ],
        },
        {
            id: 'unit2',
            unit: 'Unit 2: Geometry and Trigonometry',
            chapters: [ // Changed from topics
                { id: '3', name: 'Geometric Shapes' },
                { id: '4', name: 'Trigonometric Functions' },
                // ... Other chapters
            ],
        },
    ],
    '2': [ //SubjectId
        {
            id: 'unit1',
            unit: 'Unit 1: Mechanics',
            chapters: [ // Changed from topics
                { id: '5', name: 'Kinematics' },
                { id: '6', name: 'Forces and Laws of Motion' },
                // ... Other chapters
            ],
        },
        {
            id: 'unit2',
            unit: 'Unit 2: Waves and Optics',
            chapters: [ // Changed from topics
                { id: '7', name: 'Wave Properties' },
                { id: '8', name: 'Optics and Light' },
                // ... Other chapters
            ],
        },
    ],
    // ... Repeat for other subjects
};

const VideoAndNotes = {
    unitId: "u1",
    unitTitle: "Unit 1",
    mockTestLink: "https://www.w3schools.com/js/default.asp",
    videos: [
        {
            id: "v1",
            title: "Video 1",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t1", title: "Note 1" },
                { id: "t2", title: "Note 2" },
                // ... Other notes for Video 1
            ],
        },
        {
            id: "v2",
            title: "Video 2",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t3", title: "Note 3" },
                { id: "t4", title: "Note 4" },
                // ... Other notes for Video 2
            ],
        },
        {
            id: "v3",
            title: "Video 3",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t5", title: "Note 5" },
                { id: "t6", title: "Note 6" },
                // ... Other notes for Video 3
            ],
        },
        {
            id: "v4",
            title: "Video 4",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t7", title: "Note 7" },
                { id: "t8", title: "Note 8" },
                // ... Other notes for Video 4
            ],
        },
        {
            id: "v5",
            title: "Video 5",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t9", title: "Note 9" },
                { id: "t10", title: "Note 10" },
                // ... Other notes for Video 5
            ],
        },
        {
            id: "v6",
            title: "Video 6",
            url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            notes: [
                { id: "t11", title: "Note 11" },
                { id: "t12", title: "Note 12" },
                // ... Other notes for Video 6
            ],
        },
    ],
};

export { subjects, unitsBySubject, VideoAndNotes }
