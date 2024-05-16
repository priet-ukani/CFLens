import React from 'react';
import { ResponsiveTimeRange } from '@nivo/calendar';
const data2=[
    {
        "day": "2023-12-30",
        "value": 3
    },
    {
        "day": "2023-12-28",
        "value": 3
    },
    {
        "day": "2023-12-27",
        "value": 10
    },
    {
        "day": "2023-12-26",
        "value": 14
    },
    {
        "day": "2023-12-21",
        "value": 4
    },
    {
        "day": "2023-12-12",
        "value": 7
    },
    {
        "day": "2023-12-08",
        "value": 2
    },
    {
        "day": "2023-12-06",
        "value": 1
    },
    {
        "day": "2023-11-13",
        "value": 1
    },
    {
        "day": "2023-11-03",
        "value": 8
    },
    {
        "day": "2023-10-31",
        "value": 3
    },
    {
        "day": "2023-10-22",
        "value": 9
    },
    {
        "day": "2023-10-21",
        "value": 1
    },
    {
        "day": "2023-10-14",
        "value": 1
    },
    {
        "day": "2023-10-10",
        "value": 1
    },
    {
        "day": "2023-10-05",
        "value": 8
    },
    {
        "day": "2023-10-02",
        "value": 1
    },
    {
        "day": "2023-10-01",
        "value": 6
    },
    {
        "day": "2023-09-30",
        "value": 20
    },
    {
        "day": "2023-09-29",
        "value": 17
    },
    {
        "day": "2023-09-28",
        "value": 11
    },
    {
        "day": "2023-09-27",
        "value": 16
    },
    {
        "day": "2023-09-26",
        "value": 12
    },
    {
        "day": "2023-09-25",
        "value": 18
    },
    {
        "day": "2023-09-21",
        "value": 14
    },
    {
        "day": "2023-09-14",
        "value": 1
    },
    {
        "day": "2023-09-12",
        "value": 2
    },
    {
        "day": "2023-09-11",
        "value": 5
    },
    {
        "day": "2023-09-10",
        "value": 8
    },
    {
        "day": "2023-09-07",
        "value": 5
    },
    {
        "day": "2023-09-04",
        "value": 20
    },
    {
        "day": "2023-09-03",
        "value": 43
    },
    {
        "day": "2023-09-02",
        "value": 3
    },
    {
        "day": "2023-09-01",
        "value": 4
    },
    {
        "day": "2023-08-31",
        "value": 2
    },
    {
        "day": "2023-08-30",
        "value": 4
    },
    {
        "day": "2023-08-29",
        "value": 1
    },
    {
        "day": "2023-08-26",
        "value": 6
    },
    {
        "day": "2023-08-25",
        "value": 4
    },
    {
        "day": "2023-08-20",
        "value": 13
    },
    {
        "day": "2023-08-17",
        "value": 6
    },
    {
        "day": "2023-08-16",
        "value": 2
    },
    {
        "day": "2023-08-15",
        "value": 5
    },
    {
        "day": "2023-08-12",
        "value": 4
    },
    {
        "day": "2023-08-11",
        "value": 8
    },
    {
        "day": "2023-08-10",
        "value": 8
    },
    {
        "day": "2023-08-09",
        "value": 5
    },
    {
        "day": "2023-08-08",
        "value": 6
    },
    {
        "day": "2023-08-07",
        "value": 6
    },
    {
        "day": "2023-08-06",
        "value": 4
    },
    {
        "day": "2023-08-05",
        "value": 7
    },
    {
        "day": "2023-08-04",
        "value": 13
    },
    {
        "day": "2023-08-03",
        "value": 6
    },
    {
        "day": "2023-08-02",
        "value": 1
    },
    {
        "day": "2023-08-01",
        "value": 1
    },
    {
        "day": "2023-07-31",
        "value": 2
    },
    {
        "day": "2023-07-30",
        "value": 17
    },
    {
        "day": "2023-07-28",
        "value": 20
    },
    {
        "day": "2023-07-27",
        "value": 8
    },
    {
        "day": "2023-07-26",
        "value": 18
    },
    {
        "day": "2023-07-25",
        "value": 39
    },
    {
        "day": "2023-07-24",
        "value": 8
    },
    {
        "day": "2023-07-23",
        "value": 12
    },
    {
        "day": "2023-07-22",
        "value": 30
    },
    {
        "day": "2023-07-21",
        "value": 9
    },
    {
        "day": "2023-07-20",
        "value": 19
    },
    {
        "day": "2023-07-19",
        "value": 8
    },
    {
        "day": "2023-07-18",
        "value": 11
    },
    {
        "day": "2023-07-17",
        "value": 28
    },
    {
        "day": "2023-07-16",
        "value": 2
    },
    {
        "day": "2023-07-15",
        "value": 4
    },
    {
        "day": "2023-07-14",
        "value": 16
    },
    {
        "day": "2023-07-13",
        "value": 37
    },
    {
        "day": "2023-07-12",
        "value": 7
    },
    {
        "day": "2023-07-11",
        "value": 15
    },
    {
        "day": "2023-07-10",
        "value": 9
    },
    {
        "day": "2023-07-09",
        "value": 1
    },
    {
        "day": "2023-07-08",
        "value": 5
    },
    {
        "day": "2023-07-07",
        "value": 35
    },
    {
        "day": "2023-07-06",
        "value": 6
    },
    {
        "day": "2023-07-05",
        "value": 7
    },
    {
        "day": "2023-07-04",
        "value": 15
    },
    {
        "day": "2023-07-02",
        "value": 17
    },
    {
        "day": "2023-06-30",
        "value": 2
    },
    {
        "day": "2023-06-29",
        "value": 3
    },
    {
        "day": "2023-06-28",
        "value": 10
    },
    {
        "day": "2023-06-27",
        "value": 10
    },
    {
        "day": "2023-06-25",
        "value": 3
    },
    {
        "day": "2023-06-24",
        "value": 2
    },
    {
        "day": "2023-06-23",
        "value": 2
    },
    {
        "day": "2023-06-21",
        "value": 6
    },
    {
        "day": "2023-06-20",
        "value": 3
    },
    {
        "day": "2023-06-19",
        "value": 3
    },
    {
        "day": "2023-06-18",
        "value": 7
    },
    {
        "day": "2023-06-14",
        "value": 1
    },
    {
        "day": "2023-06-12",
        "value": 3
    },
    {
        "day": "2023-06-09",
        "value": 8
    },
    {
        "day": "2023-06-08",
        "value": 5
    },
    {
        "day": "2023-06-07",
        "value": 9
    },
    {
        "day": "2023-06-06",
        "value": 5
    },
    {
        "day": "2023-06-05",
        "value": 17
    },
    {
        "day": "2023-06-04",
        "value": 4
    },
    {
        "day": "2023-06-03",
        "value": 10
    },
    {
        "day": "2023-06-02",
        "value": 3
    },
    {
        "day": "2023-06-01",
        "value": 16
    },
    {
        "day": "2023-05-31",
        "value": 10
    },
    {
        "day": "2023-05-30",
        "value": 4
    },
    {
        "day": "2023-05-29",
        "value": 2
    },
    {
        "day": "2023-05-28",
        "value": 13
    },
    {
        "day": "2023-05-27",
        "value": 13
    },
    {
        "day": "2023-05-26",
        "value": 11
    },
    {
        "day": "2023-05-25",
        "value": 6
    },
    {
        "day": "2023-05-22",
        "value": 1
    },
    {
        "day": "2023-05-21",
        "value": 2
    },
    {
        "day": "2023-05-20",
        "value": 4
    },
    {
        "day": "2023-05-19",
        "value": 3
    },
    {
        "day": "2023-05-18",
        "value": 5
    },
    {
        "day": "2023-05-17",
        "value": 1
    },
    {
        "day": "2023-05-16",
        "value": 4
    },
    {
        "day": "2023-05-15",
        "value": 3
    },
    {
        "day": "2023-05-14",
        "value": 5
    },
    {
        "day": "2023-05-13",
        "value": 7
    },
    {
        "day": "2023-05-12",
        "value": 24
    },
    {
        "day": "2023-05-11",
        "value": 13
    },
    {
        "day": "2023-05-10",
        "value": 16
    },
    {
        "day": "2023-05-09",
        "value": 4
    },
    {
        "day": "2023-05-08",
        "value": 6
    },
    {
        "day": "2023-05-07",
        "value": 7
    },
    {
        "day": "2023-05-06",
        "value": 12
    },
    {
        "day": "2023-05-05",
        "value": 7
    },
    {
        "day": "2023-05-04",
        "value": 7
    },
    {
        "day": "2023-05-01",
        "value": 1
    },
    {
        "day": "2023-04-29",
        "value": 2
    },
    {
        "day": "2023-04-26",
        "value": 3
    },
    {
        "day": "2023-04-25",
        "value": 1
    },
    {
        "day": "2023-04-24",
        "value": 11
    },
    {
        "day": "2023-04-23",
        "value": 4
    },
    {
        "day": "2023-04-20",
        "value": 16
    },
    {
        "day": "2023-04-18",
        "value": 2
    },
    {
        "day": "2023-04-16",
        "value": 2
    },
    {
        "day": "2023-04-10",
        "value": 6
    },
    {
        "day": "2023-04-08",
        "value": 7
    },
    {
        "day": "2023-04-07",
        "value": 5
    },
    {
        "day": "2023-04-06",
        "value": 6
    },
    {
        "day": "2023-04-05",
        "value": 5
    },
    {
        "day": "2023-04-04",
        "value": 4
    },
    {
        "day": "2023-04-02",
        "value": 13
    },
    {
        "day": "2023-03-31",
        "value": 4
    },
    {
        "day": "2023-03-27",
        "value": 6
    },
    {
        "day": "2023-03-26",
        "value": 3
    },
    {
        "day": "2023-03-24",
        "value": 8
    },
    {
        "day": "2023-03-19",
        "value": 15
    },
    {
        "day": "2023-03-18",
        "value": 2
    },
    {
        "day": "2023-03-17",
        "value": 16
    },
    {
        "day": "2023-03-16",
        "value": 4
    },
    {
        "day": "2023-03-15",
        "value": 4
    },
    {
        "day": "2023-03-14",
        "value": 19
    },
    {
        "day": "2023-03-13",
        "value": 3
    },
    {
        "day": "2023-03-12",
        "value": 3
    },
    {
        "day": "2023-03-11",
        "value": 3
    },
    {
        "day": "2023-03-10",
        "value": 1
    },
    {
        "day": "2023-03-09",
        "value": 5
    },
    {
        "day": "2023-03-08",
        "value": 23
    },
    {
        "day": "2023-03-07",
        "value": 1
    },
    {
        "day": "2023-03-06",
        "value": 19
    },
    {
        "day": "2023-03-05",
        "value": 27
    },
    {
        "day": "2023-03-04",
        "value": 18
    },
    {
        "day": "2023-03-03",
        "value": 10
    },
    {
        "day": "2023-03-02",
        "value": 1
    },
    {
        "day": "2023-03-01",
        "value": 20
    },
    {
        "day": "2023-02-28",
        "value": 10
    },
    {
        "day": "2023-02-27",
        "value": 1
    },
    {
        "day": "2023-02-26",
        "value": 1
    },
    {
        "day": "2023-02-25",
        "value": 1
    },
    {
        "day": "2023-02-24",
        "value": 9
    },
    {
        "day": "2023-02-23",
        "value": 11
    },
    {
        "day": "2023-02-22",
        "value": 13
    },
    {
        "day": "2023-02-21",
        "value": 15
    },
    {
        "day": "2023-02-20",
        "value": 5
    },
    {
        "day": "2023-02-19",
        "value": 6
    },
    {
        "day": "2023-02-18",
        "value": 9
    },
    {
        "day": "2023-02-17",
        "value": 7
    },
    {
        "day": "2023-02-15",
        "value": 6
    },
    {
        "day": "2023-02-14",
        "value": 10
    },
    {
        "day": "2023-02-09",
        "value": 4
    },
    {
        "day": "2023-01-24",
        "value": 11
    },
    {
        "day": "2023-01-21",
        "value": 2
    },
    {
        "day": "2023-01-20",
        "value": 16
    },
    {
        "day": "2023-01-19",
        "value": 4
    },
    {
        "day": "2023-01-18",
        "value": 1
    },
    {
        "day": "2023-01-17",
        "value": 18
    },
    {
        "day": "2023-01-16",
        "value": 8
    },
    {
        "day": "2023-01-15",
        "value": 4
    },
    {
        "day": "2023-01-10",
        "value": 1
    },
    {
        "day": "2023-01-09",
        "value": 1
    },
    {
        "day": "2023-01-08",
        "value": 4
    },
    {
        "day": "2023-01-07",
        "value": 1
    },
    {
        "day": "2023-01-06",
        "value": 1
    },
    {
        "day": "2023-01-05",
        "value": 2
    },
    {
        "day": "2023-01-04",
        "value": 13
    },
    {
        "day": "2023-01-03",
        "value": 25
    },
    {
        "day": "2023-01-02",
        "value": 14
    },
    {
        "day": "2023-01-01",
        "value": 16
    }
];

const data=[
    {
        "day": "2023-12-30",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 1
        },
        "value": 3
    },
    {
        "day": "2023-12-28",
        "verdicts": {
            "OK": 3
        },
        "value": 3
    },
    {
        "day": "2023-12-27",
        "verdicts": {
            "OK": 7,
            "WRONG_ANSWER": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 10
    },
    {
        "day": "2023-12-26",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 9
        },
        "value": 14
    },
    {
        "day": "2023-12-21",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-12-12",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 6
        },
        "value": 7
    },
    {
        "day": "2023-12-08",
        "verdicts": {
            "RUNTIME_ERROR": 2
        },
        "value": 2
    },
    {
        "day": "2023-12-06",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-11-13",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-11-03",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 4,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 8
    },
    {
        "day": "2023-10-31",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "OK": 1
        },
        "value": 3
    },
    {
        "day": "2023-10-22",
        "verdicts": {
            "OK": 7,
            "WRONG_ANSWER": 2
        },
        "value": 9
    },
    {
        "day": "2023-10-21",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-10-14",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-10-10",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-10-05",
        "verdicts": {
            "OK": 3,
            "COMPILATION_ERROR": 2,
            "RUNTIME_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 1
        },
        "value": 8
    },
    {
        "day": "2023-10-02",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-10-01",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1,
            "MEMORY_LIMIT_EXCEEDED": 2
        },
        "value": 6
    },
    {
        "day": "2023-09-30",
        "verdicts": {
            "OK": 8,
            "TIME_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 11
        },
        "value": 20
    },
    {
        "day": "2023-09-29",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 12,
            "MEMORY_LIMIT_EXCEEDED": 1
        },
        "value": 17
    },
    {
        "day": "2023-09-28",
        "verdicts": {
            "OK": 3,
            "TIME_LIMIT_EXCEEDED": 2,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 3,
            "RUNTIME_ERROR": 2
        },
        "value": 11
    },
    {
        "day": "2023-09-27",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 11,
            "TIME_LIMIT_EXCEEDED": 2
        },
        "value": 16
    },
    {
        "day": "2023-09-26",
        "verdicts": {
            "OK": 8,
            "RUNTIME_ERROR": 4
        },
        "value": 12
    },
    {
        "day": "2023-09-25",
        "verdicts": {
            "WRONG_ANSWER": 11,
            "OK": 6,
            "RUNTIME_ERROR": 1
        },
        "value": 18
    },
    {
        "day": "2023-09-21",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 8
        },
        "value": 14
    },
    {
        "day": "2023-09-14",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-09-12",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-09-11",
        "verdicts": {
            "OK": 5
        },
        "value": 5
    },
    {
        "day": "2023-09-10",
        "verdicts": {
            "WRONG_ANSWER": 3,
            "OK": 5
        },
        "value": 8
    },
    {
        "day": "2023-09-07",
        "verdicts": {
            "OK": 5
        },
        "value": 5
    },
    {
        "day": "2023-09-04",
        "verdicts": {
            "OK": 6,
            "RUNTIME_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 9,
            "WRONG_ANSWER": 4
        },
        "value": 20
    },
    {
        "day": "2023-09-03",
        "verdicts": {
            "OK": 9,
            "WRONG_ANSWER": 29,
            "TIME_LIMIT_EXCEEDED": 3,
            "MEMORY_LIMIT_EXCEEDED": 2
        },
        "value": 43
    },
    {
        "day": "2023-09-02",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-09-01",
        "verdicts": {
            "OK": 2,
            "MEMORY_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 4
    },
    {
        "day": "2023-08-31",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-08-30",
        "verdicts": {
            "OK": 4
        },
        "value": 4
    },
    {
        "day": "2023-08-29",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-08-26",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 2
        },
        "value": 6
    },
    {
        "day": "2023-08-25",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-08-20",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 8
        },
        "value": 13
    },
    {
        "day": "2023-08-17",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 2
        },
        "value": 6
    },
    {
        "day": "2023-08-16",
        "verdicts": {
            "WRONG_ANSWER": 2
        },
        "value": 2
    },
    {
        "day": "2023-08-15",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2
        },
        "value": 5
    },
    {
        "day": "2023-08-12",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-08-11",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 5
        },
        "value": 8
    },
    {
        "day": "2023-08-10",
        "verdicts": {
            "IDLENESS_LIMIT_EXCEEDED": 5,
            "WRONG_ANSWER": 1,
            "OK": 2
        },
        "value": 8
    },
    {
        "day": "2023-08-09",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2
        },
        "value": 5
    },
    {
        "day": "2023-08-08",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 3
        },
        "value": 6
    },
    {
        "day": "2023-08-07",
        "verdicts": {
            "OK": 6
        },
        "value": 6
    },
    {
        "day": "2023-08-06",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-08-05",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 3
        },
        "value": 7
    },
    {
        "day": "2023-08-04",
        "verdicts": {
            "OK": 7,
            "WRONG_ANSWER": 5,
            "RUNTIME_ERROR": 1
        },
        "value": 13
    },
    {
        "day": "2023-08-03",
        "verdicts": {
            "OK": 2,
            "TIME_LIMIT_EXCEEDED": 2,
            "WRONG_ANSWER": 1,
            "RUNTIME_ERROR": 1
        },
        "value": 6
    },
    {
        "day": "2023-08-02",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-08-01",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-07-31",
        "verdicts": {
            "MEMORY_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-07-30",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 8,
            "MEMORY_LIMIT_EXCEEDED": 4
        },
        "value": 17
    },
    {
        "day": "2023-07-28",
        "verdicts": {
            "OK": 14,
            "WRONG_ANSWER": 3,
            "TIME_LIMIT_EXCEEDED": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 20
    },
    {
        "day": "2023-07-27",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 1,
            "OK": 4,
            "WRONG_ANSWER": 3
        },
        "value": 8
    },
    {
        "day": "2023-07-26",
        "verdicts": {
            "OK": 10,
            "WRONG_ANSWER": 5,
            "RUNTIME_ERROR": 3
        },
        "value": 18
    },
    {
        "day": "2023-07-25",
        "verdicts": {
            "OK": 21,
            "WRONG_ANSWER": 16,
            "MEMORY_LIMIT_EXCEEDED": 1,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 39
    },
    {
        "day": "2023-07-24",
        "verdicts": {
            "MEMORY_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 3,
            "OK": 3,
            "RUNTIME_ERROR": 1
        },
        "value": 8
    },
    {
        "day": "2023-07-23",
        "verdicts": {
            "OK": 8,
            "WRONG_ANSWER": 1,
            "RUNTIME_ERROR": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 12
    },
    {
        "day": "2023-07-22",
        "verdicts": {
            "OK": 20,
            "COMPILATION_ERROR": 3,
            "TIME_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 5,
            "RUNTIME_ERROR": 1
        },
        "value": 30
    },
    {
        "day": "2023-07-21",
        "verdicts": {
            "OK": 4,
            "TIME_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 3
        },
        "value": 9
    },
    {
        "day": "2023-07-20",
        "verdicts": {
            "OK": 12,
            "WRONG_ANSWER": 3,
            "RUNTIME_ERROR": 2,
            "COMPILATION_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 19
    },
    {
        "day": "2023-07-19",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 3
        },
        "value": 8
    },
    {
        "day": "2023-07-18",
        "verdicts": {
            "OK": 9,
            "WRONG_ANSWER": 2
        },
        "value": 11
    },
    {
        "day": "2023-07-17",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 2,
            "OK": 12,
            "WRONG_ANSWER": 13,
            "COMPILATION_ERROR": 1
        },
        "value": 28
    },
    {
        "day": "2023-07-16",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-07-15",
        "verdicts": {
            "OK": 3,
            "RUNTIME_ERROR": 1
        },
        "value": 4
    },
    {
        "day": "2023-07-14",
        "verdicts": {
            "OK": 10,
            "WRONG_ANSWER": 2,
            "TIME_LIMIT_EXCEEDED": 1,
            "RUNTIME_ERROR": 3
        },
        "value": 16
    },
    {
        "day": "2023-07-13",
        "verdicts": {
            "OK": 20,
            "WRONG_ANSWER": 12,
            "RUNTIME_ERROR": 3,
            "TIME_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 37
    },
    {
        "day": "2023-07-12",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 5
        },
        "value": 7
    },
    {
        "day": "2023-07-11",
        "verdicts": {
            "OK": 8,
            "RUNTIME_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 3,
            "WRONG_ANSWER": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 15
    },
    {
        "day": "2023-07-10",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 4
        },
        "value": 9
    },
    {
        "day": "2023-07-09",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-07-08",
        "verdicts": {
            "COMPILATION_ERROR": 2,
            "OK": 3
        },
        "value": 5
    },
    {
        "day": "2023-07-07",
        "verdicts": {
            "OK": 19,
            "WRONG_ANSWER": 14,
            "COMPILATION_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 35
    },
    {
        "day": "2023-07-06",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 3,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 6
    },
    {
        "day": "2023-07-05",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 2
        },
        "value": 7
    },
    {
        "day": "2023-07-04",
        "verdicts": {
            "OK": 10,
            "TIME_LIMIT_EXCEEDED": 2,
            "WRONG_ANSWER": 3
        },
        "value": 15
    },
    {
        "day": "2023-07-02",
        "verdicts": {
            "OK": 9,
            "WRONG_ANSWER": 2,
            "RUNTIME_ERROR": 1,
            "TIME_LIMIT_EXCEEDED": 5
        },
        "value": 17
    },
    {
        "day": "2023-06-30",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-06-29",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-06-28",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 4
        },
        "value": 10
    },
    {
        "day": "2023-06-27",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 3,
            "TIME_LIMIT_EXCEEDED": 5
        },
        "value": 10
    },
    {
        "day": "2023-06-25",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-06-24",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-06-23",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-06-21",
        "verdicts": {
            "OK": 5,
            "RUNTIME_ERROR": 1
        },
        "value": 6
    },
    {
        "day": "2023-06-20",
        "verdicts": {
            "OK": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 3
    },
    {
        "day": "2023-06-19",
        "verdicts": {
            "OK": 1,
            "TIME_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 3
    },
    {
        "day": "2023-06-18",
        "verdicts": {
            "WRONG_ANSWER": 4,
            "OK": 3
        },
        "value": 7
    },
    {
        "day": "2023-06-14",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-06-12",
        "verdicts": {
            "OK": 3
        },
        "value": 3
    },
    {
        "day": "2023-06-09",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 5
        },
        "value": 8
    },
    {
        "day": "2023-06-08",
        "verdicts": {
            "OK": 4,
            "RUNTIME_ERROR": 1
        },
        "value": 5
    },
    {
        "day": "2023-06-07",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 8
        },
        "value": 9
    },
    {
        "day": "2023-06-06",
        "verdicts": {
            "OK": 5
        },
        "value": 5
    },
    {
        "day": "2023-06-05",
        "verdicts": {
            "OK": 9,
            "WRONG_ANSWER": 8
        },
        "value": 17
    },
    {
        "day": "2023-06-04",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-06-03",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 4
        },
        "value": 10
    },
    {
        "day": "2023-06-02",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-06-01",
        "verdicts": {
            "OK": 7,
            "RUNTIME_ERROR": 2,
            "WRONG_ANSWER": 6,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 16
    },
    {
        "day": "2023-05-31",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 5,
            "MEMORY_LIMIT_EXCEEDED": 1,
            "RUNTIME_ERROR": 1
        },
        "value": 10
    },
    {
        "day": "2023-05-30",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "OK": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 4
    },
    {
        "day": "2023-05-29",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-05-28",
        "verdicts": {
            "SKIPPED": 6,
            "OK": 4,
            "WRONG_ANSWER": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 13
    },
    {
        "day": "2023-05-27",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 6,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 13
    },
    {
        "day": "2023-05-26",
        "verdicts": {
            "OK": 7,
            "WRONG_ANSWER": 2,
            "TIME_LIMIT_EXCEEDED": 2
        },
        "value": 11
    },
    {
        "day": "2023-05-25",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "OK": 4
        },
        "value": 6
    },
    {
        "day": "2023-05-22",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-05-21",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-05-20",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-05-19",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-05-18",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2
        },
        "value": 5
    },
    {
        "day": "2023-05-17",
        "verdicts": {
            "WRONG_ANSWER": 1
        },
        "value": 1
    },
    {
        "day": "2023-05-16",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 3
        },
        "value": 4
    },
    {
        "day": "2023-05-15",
        "verdicts": {
            "COMPILATION_ERROR": 1,
            "RUNTIME_ERROR": 1,
            "OK": 1
        },
        "value": 3
    },
    {
        "day": "2023-05-14",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 1
        },
        "value": 5
    },
    {
        "day": "2023-05-13",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 2
        },
        "value": 7
    },
    {
        "day": "2023-05-12",
        "verdicts": {
            "OK": 10,
            "WRONG_ANSWER": 7,
            "COMPILATION_ERROR": 1,
            "IDLENESS_LIMIT_EXCEEDED": 4,
            "TIME_LIMIT_EXCEEDED": 1,
            "RUNTIME_ERROR": 1
        },
        "value": 24
    },
    {
        "day": "2023-05-11",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 8,
            "TIME_LIMIT_EXCEEDED": 2
        },
        "value": 13
    },
    {
        "day": "2023-05-10",
        "verdicts": {
            "WRONG_ANSWER": 9,
            "TIME_LIMIT_EXCEEDED": 3,
            "OK": 3,
            "RUNTIME_ERROR": 1
        },
        "value": 16
    },
    {
        "day": "2023-05-09",
        "verdicts": {
            "OK": 3,
            "COMPILATION_ERROR": 1
        },
        "value": 4
    },
    {
        "day": "2023-05-08",
        "verdicts": {
            "OK": 4,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 1
        },
        "value": 6
    },
    {
        "day": "2023-05-07",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 2,
            "OK": 5
        },
        "value": 7
    },
    {
        "day": "2023-05-06",
        "verdicts": {
            "OK": 6,
            "COMPILATION_ERROR": 3,
            "WRONG_ANSWER": 2,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 12
    },
    {
        "day": "2023-05-05",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 2
        },
        "value": 7
    },
    {
        "day": "2023-05-04",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 6
        },
        "value": 7
    },
    {
        "day": "2023-05-01",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-04-29",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-04-26",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2
        },
        "value": 3
    },
    {
        "day": "2023-04-25",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-04-24",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 3,
            "WRONG_ANSWER": 3,
            "OK": 5
        },
        "value": 11
    },
    {
        "day": "2023-04-23",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 2
        },
        "value": 4
    },
    {
        "day": "2023-04-20",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 7,
            "TIME_LIMIT_EXCEEDED": 3,
            "COMPILATION_ERROR": 1
        },
        "value": 16
    },
    {
        "day": "2023-04-18",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-04-16",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1
        },
        "value": 2
    },
    {
        "day": "2023-04-10",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 1
        },
        "value": 6
    },
    {
        "day": "2023-04-08",
        "verdicts": {
            "OK": 4,
            "COMPILATION_ERROR": 2,
            "WRONG_ANSWER": 1
        },
        "value": 7
    },
    {
        "day": "2023-04-07",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "OK": 3
        },
        "value": 5
    },
    {
        "day": "2023-04-06",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 6
    },
    {
        "day": "2023-04-05",
        "verdicts": {
            "OK": 5
        },
        "value": 5
    },
    {
        "day": "2023-04-04",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 2
        },
        "value": 4
    },
    {
        "day": "2023-04-02",
        "verdicts": {
            "WRONG_ANSWER": 6,
            "OK": 7
        },
        "value": 13
    },
    {
        "day": "2023-03-31",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 3
        },
        "value": 4
    },
    {
        "day": "2023-03-27",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 2,
            "RUNTIME_ERROR": 3
        },
        "value": 6
    },
    {
        "day": "2023-03-26",
        "verdicts": {
            "OK": 3
        },
        "value": 3
    },
    {
        "day": "2023-03-24",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 6
        },
        "value": 8
    },
    {
        "day": "2023-03-19",
        "verdicts": {
            "OK": 7,
            "WRONG_ANSWER": 6,
            "COMPILATION_ERROR": 1,
            "IDLENESS_LIMIT_EXCEEDED": 1
        },
        "value": 15
    },
    {
        "day": "2023-03-18",
        "verdicts": {
            "OK": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 2
    },
    {
        "day": "2023-03-17",
        "verdicts": {
            "WRONG_ANSWER": 12,
            "TIME_LIMIT_EXCEEDED": 2,
            "OK": 2
        },
        "value": 16
    },
    {
        "day": "2023-03-16",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "OK": 2
        },
        "value": 4
    },
    {
        "day": "2023-03-15",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-03-14",
        "verdicts": {
            "OK": 10,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 8
        },
        "value": 19
    },
    {
        "day": "2023-03-13",
        "verdicts": {
            "OK": 2,
            "WRONG_ANSWER": 1
        },
        "value": 3
    },
    {
        "day": "2023-03-12",
        "verdicts": {
            "OK": 3
        },
        "value": 3
    },
    {
        "day": "2023-03-11",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 3
    },
    {
        "day": "2023-03-10",
        "verdicts": {
            "WRONG_ANSWER": 1
        },
        "value": 1
    },
    {
        "day": "2023-03-09",
        "verdicts": {
            "WRONG_ANSWER": 2,
            "TIME_LIMIT_EXCEEDED": 1,
            "OK": 2
        },
        "value": 5
    },
    {
        "day": "2023-03-08",
        "verdicts": {
            "OK": 8,
            "WRONG_ANSWER": 15
        },
        "value": 23
    },
    {
        "day": "2023-03-07",
        "verdicts": {
            "COMPILATION_ERROR": 1
        },
        "value": 1
    },
    {
        "day": "2023-03-06",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 9,
            "TIME_LIMIT_EXCEEDED": 2,
            "COMPILATION_ERROR": 1,
            "RUNTIME_ERROR": 2
        },
        "value": 19
    },
    {
        "day": "2023-03-05",
        "verdicts": {
            "OK": 13,
            "TIME_LIMIT_EXCEEDED": 5,
            "RUNTIME_ERROR": 1,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 5,
            "MEMORY_LIMIT_EXCEEDED": 2
        },
        "value": 27
    },
    {
        "day": "2023-03-04",
        "verdicts": {
            "OK": 8,
            "WRONG_ANSWER": 9,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 18
    },
    {
        "day": "2023-03-03",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 4
        },
        "value": 10
    },
    {
        "day": "2023-03-02",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-03-01",
        "verdicts": {
            "OK": 8,
            "TIME_LIMIT_EXCEEDED": 3,
            "COMPILATION_ERROR": 1,
            "WRONG_ANSWER": 8
        },
        "value": 20
    },
    {
        "day": "2023-02-28",
        "verdicts": {
            "OK": 7,
            "TIME_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 2
        },
        "value": 10
    },
    {
        "day": "2023-02-27",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-02-26",
        "verdicts": {
            "COMPILATION_ERROR": 1
        },
        "value": 1
    },
    {
        "day": "2023-02-25",
        "verdicts": {
            "COMPILATION_ERROR": 1
        },
        "value": 1
    },
    {
        "day": "2023-02-24",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 6
        },
        "value": 9
    },
    {
        "day": "2023-02-23",
        "verdicts": {
            "OK": 5,
            "WRONG_ANSWER": 4,
            "TIME_LIMIT_EXCEEDED": 2
        },
        "value": 11
    },
    {
        "day": "2023-02-22",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 8,
            "TIME_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 13
    },
    {
        "day": "2023-02-21",
        "verdicts": {
            "OK": 6,
            "COMPILATION_ERROR": 2,
            "WRONG_ANSWER": 7
        },
        "value": 15
    },
    {
        "day": "2023-02-20",
        "verdicts": {
            "OK": 4,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 5
    },
    {
        "day": "2023-02-19",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2,
            "COMPILATION_ERROR": 1
        },
        "value": 6
    },
    {
        "day": "2023-02-18",
        "verdicts": {
            "WRONG_ANSWER": 5,
            "OK": 4
        },
        "value": 9
    },
    {
        "day": "2023-02-17",
        "verdicts": {
            "WRONG_ANSWER": 5,
            "OK": 2
        },
        "value": 7
    },
    {
        "day": "2023-02-15",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 2,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 6
    },
    {
        "day": "2023-02-14",
        "verdicts": {
            "OK": 4,
            "WRONG_ANSWER": 6
        },
        "value": 10
    },
    {
        "day": "2023-02-09",
        "verdicts": {
            "OK": 3,
            "COMPILATION_ERROR": 1
        },
        "value": 4
    },
    {
        "day": "2023-01-24",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 8
        },
        "value": 11
    },
    {
        "day": "2023-01-21",
        "verdicts": {
            "MEMORY_LIMIT_EXCEEDED": 1,
            "OK": 1
        },
        "value": 2
    },
    {
        "day": "2023-01-20",
        "verdicts": {
            "OK": 6,
            "WRONG_ANSWER": 8,
            "TIME_LIMIT_EXCEEDED": 2
        },
        "value": 16
    },
    {
        "day": "2023-01-19",
        "verdicts": {
            "OK": 1,
            "TIME_LIMIT_EXCEEDED": 2,
            "WRONG_ANSWER": 1
        },
        "value": 4
    },
    {
        "day": "2023-01-18",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 1
    },
    {
        "day": "2023-01-17",
        "verdicts": {
            "OK": 8,
            "WRONG_ANSWER": 9,
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 18
    },
    {
        "day": "2023-01-16",
        "verdicts": {
            "OK": 3,
            "WRONG_ANSWER": 5
        },
        "value": 8
    },
    {
        "day": "2023-01-15",
        "verdicts": {
            "OK": 1,
            "WRONG_ANSWER": 3
        },
        "value": 4
    },
    {
        "day": "2023-01-10",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-01-09",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 1
        },
        "value": 1
    },
    {
        "day": "2023-01-08",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 2,
            "WRONG_ANSWER": 2
        },
        "value": 4
    },
    {
        "day": "2023-01-07",
        "verdicts": {
            "OK": 1
        },
        "value": 1
    },
    {
        "day": "2023-01-06",
        "verdicts": {
            "WRONG_ANSWER": 1
        },
        "value": 1
    },
    {
        "day": "2023-01-05",
        "verdicts": {
            "OK": 2
        },
        "value": 2
    },
    {
        "day": "2023-01-04",
        "verdicts": {
            "OK": 3,
            "RUNTIME_ERROR": 4,
            "WRONG_ANSWER": 4,
            "TIME_LIMIT_EXCEEDED": 1,
            "COMPILATION_ERROR": 1
        },
        "value": 13
    },
    {
        "day": "2023-01-03",
        "verdicts": {
            "OK": 13,
            "WRONG_ANSWER": 11,
            "COMPILATION_ERROR": 1
        },
        "value": 25
    },
    {
        "day": "2023-01-02",
        "verdicts": {
            "TIME_LIMIT_EXCEEDED": 1,
            "WRONG_ANSWER": 6,
            "OK": 7
        },
        "value": 14
    },
    {
        "day": "2023-01-01",
        "verdicts": {
            "WRONG_ANSWER": 8,
            "COMPILATION_ERROR": 2,
            "OK": 4,
            "TIME_LIMIT_EXCEEDED": 1,
            "MEMORY_LIMIT_EXCEEDED": 1
        },
        "value": 16
    }
]

const TimeRangeChart = () => {
    var itemHeight = window.screen.width > 500 ? 160 : 50;
    var temp_height = window.screen.width > 500 ? '500px' : '180px';
    var width_per = window.screen.width > 500 ? '95%' : '108%';
    var margin_lef= window.screen.width > 500 ? 40 : 10;
    var temp_bottom = window.screen.width > 768 ? 20 : 100;
    console.log("INNER",window.screen.width);
    if (window.screen.width < 820 && window.screen.width > 500)
    {
        console.log("OK");
        temp_height = '300px';
    }
    // if (window.screen.width > 600)
    //  temp_bottom= 1000 
    return (
    <div style={{ width: width_per, height: temp_height, backgroundColor: 'transparent' }}>
      <ResponsiveTimeRange
       data={data}
       from="2023-01-01"
       to="2023-12-30"
       emptyColor="#eeeeee"
       colors={['#fbd1ca', '#f8a89b', '#f57d69', '#f26149', '#f03e21']}
       minValue={0}
       maxValue={20}
       margin={{ top: 40, right: 40, bottom: temp_bottom, left: margin_lef }}
       monthLegendOffset={14}
       weekdayLegendOffset={77}
       dayRadius={8}
       dayBorderColor="#e7dada"
       tooltip={({ day, value, color, verdicts }) => (
          <div>
            <div
              style={{
                display: 'flex',
                background: 'white',
                alignItems: 'center',
                borderRadius: '2px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
                padding: '5px 9px',
              }}
            >
              <span
                style={{
                  width: 12,
                  minWidth: 12,
                  height: 270,
                  minHeight: 12,
                  backgroundColor: color,
                  marginRight: 7,
                }}
              />
              <span>
                {day} : <strong>{value}</strong>
                <br />
                <div>
                  AC: <div className="bar" style={{ width: `${(verdicts.OK || 0) * 8}px`, backgroundColor: '#65a637' }}>{verdicts.OK || 0}</div>
                </div>
                <div>
                  WA: <div className="bar" style={{ width: `${(verdicts.WRONG_ANSWER || 0) * 8}px`, backgroundColor: '#ff0000' }}>{verdicts.WRONG_ANSWER || 0}</div>
                </div>
                <div>
                  RTE: <div className="bar" style={{ width: `${(verdicts.RUNTIME_ERROR || 0) * 8}px`, backgroundColor: '#9da6a8' }}>{verdicts.RUNTIME_ERROR || 0}</div>
                </div>
                <div>
                  TLE: <div className="bar" style={{ width: `${(verdicts.TIME_LIMIT_EXCEEDED || 0) * 8}px`, backgroundColor: '#2d8ed2' }}>{verdicts.TIME_LIMIT_EXCEEDED || 0}</div>
                </div>
                <div>
                  CE: <div className="bar" style={{ width: `${(verdicts.COMPILATION_ERROR || 0) * 8}px`, backgroundColor: '#b0dd3f' }}>{verdicts.COMPILATION_ERROR || 0}</div>
                </div>
              </span>
             
            </div>
          </div>
        )}
       legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: itemHeight,
            itemsSpacing: 14,
            itemDirection: 'left-to-right',
            translateX: 0,
            translateY: -90,
            symbolSize: 24
          }
       ]}
       onClick={(data) => {
          console.log(data);
       }}
      />
    </div>
  );
};
  
export default TimeRangeChart;