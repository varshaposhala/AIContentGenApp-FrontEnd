let myData ={
  "questions1":[
          {
          "input_output": [
            {
              "input": [
                {
                  "input": "j i l p d o n",
                  "output": "consonant vowel consonant consonant consonant vowel consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 1,
                  "is_hidden": false
                },
                {
                  "input": "b c d f g",
                  "output": "consonant consonant consonant consonant consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 2,
                  "is_hidden": false
                },
                {
                  "input": "a e i o u",
                  "output": "vowel vowel vowel vowel vowel",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 3,
                  "is_hidden": true
                },
                {
                  "input": "x y z a o",
                  "output": "consonant consonant consonant vowel vowel",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 4,
                  "is_hidden": true
                },
                {
                  "input": "m n o p q r s",
                  "output": "consonant consonant vowel consonant consonant consonant consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 5,
                  "is_hidden": true
                },
                {
                  "input": "h j o r g s h b j g d v j",
                  "output": "consonant consonant vowel consonant consonant consonant consonant consonant consonant consonant consonant consonant consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 6,
                  "is_hidden": true
                },
                {
                  "input": "a e i o u a l l o t h e r",
                  "output": "vowel vowel vowel vowel vowel vowel consonant consonant vowel consonant consonant vowel consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 7,
                  "is_hidden": true
                },
                {
                  "input": "h e l l o w o r l d",
                  "output": "consonant vowel consonant consonant vowel consonant vowel consonant consonant consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 8,
                  "is_hidden": true
                },
                {
                  "input": "h i",
                  "output": "consonant vowel",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 9,
                  "is_hidden": true
                },
                {
                  "input": "d e v e l o p e r",
                  "output": "consonant vowel consonant vowel consonant vowel consonant vowel consonant",
                  "score": 1,
                  "testcase_type": "NORMAL_CASE",
                  "t_id": 10,
                  "is_hidden": true
                }
              ]
            }
          ],
          "question_text": "### Modify the Alphabet\n\nWrite the function `modifyTheString(arr)` that processes an array of single-character lowercase alphabets. For each character:\n\n- If the character is a vowel (a, e, i, o, u), replace it with the string \"vowel\".\n- If the character is a consonant, replace it with the string \"consonant\".\n\n#### Input Format\n- The input consists of a single line containing a space-separated list of lowercase alphabets (a-z), with no numbers or special characters.\n\n#### Output Format\n- return a space-separated list where each alphabet is replaced with either \"vowel\" or \"consonant\" as per the rules.\n\n#### Constraints\n- The number of characters (N) is between 1 and 100.\n\n#### Sample Input:\n```\nj i l p d o n\n```\n\n#### Sample Output:\n```\nconsonant vowel consonant consonant consonant vowel consonant\n```\n\n#### Explanation:\nIn the given space-separated lowercase alphabets:\n\n- 'j' → consonant → consonant\n- 'i' → vowel → vowel\n- 'l' → consonant → consonant\n- 'p' → consonant → consonant\n- 'd' → consonant → consonant\n- 'o' → vowel → vowel\n- 'n' → consonant → consonant\n\n---",
          "code_data": "",
          "short_text": "Modify the Alphabet",
          "question_type": "CODING",
          "question_key": 0,
          "skills": [],
          "question_format": "CODING_PRACTICE",
          "content_type": "MARKDOWN",
          "difficulty": "EASY",
          "remarks": "",
          "scores_updated": true,
          "scores_computed": 10,
          "questions_asked_by_companies_info": [],
          "test_case_evaluation_metrics": [
            {
              "language": "C",
              "time_limit_to_execute_in_seconds": 2.01
            },
            {
              "language": "CPP",
              "time_limit_to_execute_in_seconds": 2.01
            },
            {
              "language": "PYTHON39",
              "time_limit_to_execute_in_seconds": 10.01
            }
          ],
          "code_repository_details": null,
          "solutions": [
            {
              "order": 1,
              "title": {
                "content": "Code",
                "content_type": "TEXT"
              },
              "description": {
                "content": "",
                "content_type": ""
              },
              "code_details": [
                {
                  "code_content": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n\n//Don't modify above code\n\nfunction modifyTheString(arr) {\n  //write your code here\n  let result = []\n  for(let char of arr) {\n    const ch = char.toLowerCase();\n    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {\n      result.push(\"vowel\");\n    } else {\n      result.push(\"consonant\");\n    }\n  };\n\n  return result.join(\" \");\n}\n//Don't modify below code\n\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  let arr = readLine().split(\" \");\n  console.log(modifyTheString(arr))\n}",
                  "language": "NODE_JS",
                  "default_code": true
                }
              ],
              "complexity_analysis": {
                "content": "",
                "content_type": ""
              }
            }
          ],
          "hints": [],
          "code_metadata": [
            {
              "is_editable": true,
              "language": "NODE_JS",
              "code_data": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n\n//Don't modify above code\n\nfunction modifyTheString(arr) {\n  //write your code here\n  \n}\n\n//Don't modify below code\n\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  let arr = readLine().split(\" \");\n  console.log(modifyTheString(arr))\n}",
              "default_code": true
            }
          ],
          "cpp_python_time_factor": 0,
          "question_id": "c9c8102c-90c1-446e-9356-5f3b38d9b48f",
          "tag_names": [
            "POOL_1",
            "DIFFICULTY_EASY",
            "IN_OFFLINE_EXAM",
            "TOPIC_DSA_CODING",
            "SOURCE_NI_ASSESMENT",
            "SUB_TOPIC_STRING",
            "COMPANY_UNKNOWN",
            "c9c8102c-90c1-446e-9356-5f3b38d9b48f"
          ],
          "language_code_repository_details": []
          },
          {
            "input_output": [
              {
                "input": [
                  {
                    "input": "apple banana cat elephant dog",
                    "output": "short long short long short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 11,
                    "is_hidden": false
                  },
                  {
                    "input": "dog cat apple",
                    "output": "short short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 12,
                    "is_hidden": false
                  },
                  {
                    "input": "test max size tiny",
                    "output": "short short short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 13,
                    "is_hidden": true
                  },
                  {
                    "input": "car bicycle spaceship house apple",
                    "output": "short long long short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 14,
                    "is_hidden": true
                  },
                  {
                    "input": "laptop charger backpack keyboard",
                    "output": "long long long long",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 15,
                    "is_hidden": true
                  },
                  {
                    "input": "yes no maybe possibly",
                    "output": "short short short long",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 16,
                    "is_hidden": true
                  },
                  {
                    "input": "This is your book reeta do you know this",
                    "output": "short short short short short short short short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 17,
                    "is_hidden": true
                  },
                  {
                    "input": "This is my home which is very beautiful and it have garden into it",
                    "output": "short short short short short short short long short short short long short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 18,
                    "is_hidden": true
                  },
                  {
                    "input": "you are sweetest person",
                    "output": "short short long long",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 19,
                    "is_hidden": true
                  },
                  {
                    "input": "done with this thing",
                    "output": "short short short short",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 20,
                    "is_hidden": true
                  }
                ]
              }
            ],
            "question_text": "### String Length Checker\n\nWrite the function `stringLengthChecker(input)` that processes an array of space-separated strings and determines whether each string is short or long based on its length.\n\n- If the string has 5 or fewer characters, classify it as \"short\".\n- If the string has more than 5 characters, classify it as \"long\".\n\n#### Input Format\n- The input consists of an array of space-separated strings.\n\n#### Output Format\n- Print space-separated values where each string is classified as \"short\" or \"long\" based on its length.\n\n#### Constraints\n- 1 ≤ N ≤ 100, and each string has a length of at least 1 and at most 10 characters.\n\n#### Sample Input:\n```\napple banana cat elephant dog\n```\n\n#### Sample Output:\n```\nshort long short long short\n```\n\n#### Explanation:\nIn the given space-separated words:\n\n- 'apple' → 5 characters → short\n- 'banana' → 6 characters → long\n- 'cat' → 3 characters → short\n- 'elephant' → 8 characters → long\n- 'dog' → 3 characters → short\n",
            "code_data": "",
            "short_text": "String Length Checker",
            "question_type": "CODING",
            "question_key": 0,
            "skills": [],
            "question_format": "CODING_PRACTICE",
            "content_type": "MARKDOWN",
            "difficulty": "EASY",
            "remarks": "",
            "scores_updated": true,
            "scores_computed": 10,
            "questions_asked_by_companies_info": [],
            "test_case_evaluation_metrics": [
              {
                "language": "C",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "CPP",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "PYTHON39",
                "time_limit_to_execute_in_seconds": 10.01
              }
            ],
            "code_repository_details": null,
            "solutions": [
              {
                "order": 1,
                "title": {
                  "content": "Code",
                  "content_type": "TEXT"
                },
                "description": {
                  "content": "",
                  "content_type": ""
                },
                "code_details": [
                  {
                    "code_content": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n\n//Don't modify above code\n\nfunction stringLengthChecker(input) {\n  //Write your code here\n  let result = [];\n\n  for (let str of input) {\n    if (str.length <= 5) {\n      result.push(\"short\");\n    } else {\n      result.push(\"long\");\n    }\n  }\n\n\n  return result.join(\" \")\n}\n//Don't modify below code\n\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  let arr = readLine().split(\" \");\n  console.log(stringLengthChecker(arr))\n}",
                    "language": "NODE_JS",
                    "default_code": true
                  }
                ],
                "complexity_analysis": {
                  "content": "",
                  "content_type": ""
                }
              }
            ],
            "hints": [],
            "code_metadata": [
              {
                "is_editable": true,
                "language": "NODE_JS",
                "code_data": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n\n//Don't modify above code\n\nfunction stringLengthChecker(input) {\n  //Write your code here\n  \n}\n//Don't modify below code\n\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  let arr = readLine().split(\" \");\n  console.log(stringLengthChecker(arr))\n}",
                "default_code": true
              }
            ],
            "cpp_python_time_factor": 0,
            "question_id": "3124e2b8-613d-4d33-9085-fd7f994df2a8",
            "tag_names": [
              "POOL_1",
              "DIFFICULTY_EASY",
              "IN_OFFLINE_EXAM",
              "TOPIC_DSA_CODING",
              "SOURCE_NI_ASSESMENT",
              "SUB_TOPIC_STRING",
              "COMPANY_UNKNOWN",
              "3124e2b8-613d-4d33-9085-fd7f994df2a8"
            ],
            "language_code_repository_details": []
          }
  ],
  "questions2":[
          {
            "input_output": [
              {
                "input": [
                  {
                    "input": "60",
                    "output": "Pass",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 21,
                    "is_hidden": false
                  },
                  {
                    "input": "30",
                    "output": "Fail",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 22,
                    "is_hidden": false
                  },
                  {
                    "input": "76",
                    "output": "Excellent",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 23,
                    "is_hidden": true
                  },
                  {
                    "input": "99",
                    "output": "Excellent",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 24,
                    "is_hidden": true
                  },
                  {
                    "input": "115",
                    "output": "Wrong Evaluation",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 25,
                    "is_hidden": true
                  },
                  {
                    "input": "45",
                    "output": "Fail",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 26,
                    "is_hidden": true
                  },
                  {
                    "input": "110",
                    "output": "Wrong Evaluation",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 27,
                    "is_hidden": true
                  },
                  {
                    "input": "75",
                    "output": "Good",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 28,
                    "is_hidden": true
                  },
                  {
                    "input": "58",
                    "output": "Pass",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 29,
                    "is_hidden": true
                  },
                  {
                    "input": "62",
                    "output": "Good",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 30,
                    "is_hidden": true
                  }
                ]
              }
            ],
            "question_text": "### Check the Rank of a Student\n\nWrite the function `checkRank(num)` that takes a student's score `num` and returns a string that categorizes the rank based on the following conditions:\n\n- Return \"Fail\" if the score is less than 50.\n- Return \"Pass\" if the score is between 50 and 60 (inclusive).\n- Return \"Good\" if the score is between 61 and 75 (inclusive).\n- Return \"Excellent\" if the score is greater than 75.\n- Return \"Wrong Evaluation\" if the score is outside the range `0 <= num <= 100`.\n\n#### Input Format\n- The input consists of a single integer `num` representing the student's score.\n\n#### Output Format\n- Return a string categorizing the student's rank based on the specified conditions.\n\n\n#### Sample Input:\n```\n67\n```\n\n#### Sample Output:\n```\nGood\n```\n\n#### Explanation:\n- The score is 67, which is between 61 and 75, so it returns the string `Good`.\n\n---",
            "code_data": "",
            "short_text": "Check the Rank of a Student",
            "question_type": "CODING",
            "question_key": 0,
            "skills": [],
            "question_format": "CODING_PRACTICE",
            "content_type": "MARKDOWN",
            "difficulty": "EASY",
            "remarks": "",
            "scores_updated": true,
            "scores_computed": 10,
            "questions_asked_by_companies_info": [],
            "test_case_evaluation_metrics": [
              {
                "language": "C",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "CPP",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "PYTHON39",
                "time_limit_to_execute_in_seconds": 10.01
              }
            ],
            "code_repository_details": null,
            "solutions": [
              {
                "order": 1,
                "title": {
                  "content": "Code",
                  "content_type": "TEXT"
                },
                "description": {
                  "content": "",
                  "content_type": ""
                },
                "code_details": [
                  {
                    "code_content": "\n\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n\n// Don't modify above code\n\nfunction checkRank(num) {\n  // Write your code here\n  if (num < 0 || num > 100) {\n    return \"Wrong Evaluation\";\n  } else if (num < 50) {\n    return \"Fail\";\n  } else if (num >= 50 && num <= 60) {\n    return \"Pass\";\n  } else if (num >= 61 && num <= 75) {\n    return \"Good\";\n  } else {\n    return \"Excellent\";\n  }\n}\n\n// Don't modify below code\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  // Read the entire line and convert it to an integer\n  let num = parseInt(readLine());\n  console.log(checkRank(num));\n}",
                    "language": "NODE_JS",
                    "default_code": true
                  }
                ],
                "complexity_analysis": {
                  "content": "",
                  "content_type": ""
                }
              }
            ],
            "hints": [],
            "code_metadata": [
              {
                "is_editable": true,
                "language": "NODE_JS",
                "code_data": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n\n  main();\n});\n//Don't modify above code\n\n\nfunction checkRank(num) {\n  //Write your code here\n  \n}\n\n\n//Don't modify below code\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  // Read the entire line and convert it to an array of numbers\n  let num = readLine().split(\" \").map(Number);\n  console.log(checkRank(num))\n\n}",
                "default_code": true
              }
            ],
            "cpp_python_time_factor": 0,
            "question_id": "570d2541-193f-4548-aa25-3478b92618b1",
            "tag_names": [
              "POOL_1",
              "DIFFICULTY_EASY",
              "IN_OFFLINE_EXAM",
              "TOPIC_DSA_CODING",
              "SOURCE_NI_ASSESMENT",
              "SUB_TOPIC_STRING",
              "COMPANY_UNKNOWN",
              "570d2541-193f-4548-aa25-3478b92618b1"
            ],
            "language_code_repository_details": []
          },
          {
            "input_output": [
              {
                "input": [
                  {
                    "input": "16",
                    "output": "Teenager",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 31,
                    "is_hidden": false
                  },
                  {
                    "input": "25",
                    "output": "Adult",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 32,
                    "is_hidden": false
                  },
                  {
                    "input": "165",
                    "output": "Invalid Age",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 33,
                    "is_hidden": true
                  },
                  {
                    "input": "12",
                    "output": "Child",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 34,
                    "is_hidden": true
                  },
                  {
                    "input": "45",
                    "output": "Adult",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 35,
                    "is_hidden": true
                  },
                  {
                    "input": "78",
                    "output": "Senior",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 36,
                    "is_hidden": true
                  },
                  {
                    "input": "130",
                    "output": "Invalid Age",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 37,
                    "is_hidden": true
                  },
                  {
                    "input": "65",
                    "output": "Senior",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 38,
                    "is_hidden": true
                  },
                  {
                    "input": "11",
                    "output": "Child",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 39,
                    "is_hidden": true
                  },
                  {
                    "input": "18",
                    "output": "Teenager",
                    "score": 1,
                    "testcase_type": "NORMAL_CASE",
                    "t_id": 40,
                    "is_hidden": true
                  }
                ]
              }
            ],
            "question_text": "### Check the Age Group\n\nGiven an age `num`, categorize the person into the following age groups:\n\n- Return \"Child\" if the age is less than 13.\n- Return \"Teenager\" if the age is between 13 and 19 (inclusive).\n- Return \"Adult\" if the age is between 20 and 64 (inclusive).\n- Return \"Senior\" if the age is 65 or above.\n- Return \"Invalid Age\" if the age is outside the valid range (0 <= num <= 120).\n\n#### Input Format\n- The input consists of a single integer `num` representing the age of the person.\n\n#### Output Format\n- Return a string representing the person's age group based on the specified conditions.\n\n\n#### Sample Input:\n```\n16\n```\n#### Sample Output:\n```\nTeenager\n```\n\n#### Explanation:\n- The person's age is between 13 and 19, so the output is `\"Teenager\"`.\n\n---",
            "code_data": "",
            "short_text": "Check the Age Group",
            "question_type": "CODING",
            "question_key": 0,
            "skills": [],
            "question_format": "CODING_PRACTICE",
            "content_type": "MARKDOWN",
            "difficulty": "EASY",
            "remarks": "",
            "scores_updated": true,
            "scores_computed": 10,
            "questions_asked_by_companies_info": [],
            "test_case_evaluation_metrics": [
              {
                "language": "C",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "CPP",
                "time_limit_to_execute_in_seconds": 2.01
              },
              {
                "language": "PYTHON39",
                "time_limit_to_execute_in_seconds": 10.01
              }
            ],
            "code_repository_details": null,
            "solutions": [
              {
                "order": 1,
                "title": {
                  "content": "Code",
                  "content_type": "TEXT"
                },
                "description": {
                  "content": "",
                  "content_type": ""
                },
                "code_details": [
                  {
                    "code_content": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n  inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n  inputString = inputString\n    .trim()\n    .split(\"\\n\")\n    .map((str) => str.trim());\n  main();\n});\n\n// Don't modify above code\n\nfunction checkAgeGroup(num) {\n  // Write your code here\n  if (num < 0 || num > 120) {\n    return \"Invalid Age\";\n  } else if (num < 13) {\n    return \"Child\";\n  } else if (num >= 13 && num <= 19) {\n    return \"Teenager\";\n  } else if (num >= 20 && num <= 64) {\n    return \"Adult\";\n  } else {\n    return \"Senior\";\n  }\n}\n\n// Don't modify below code\nfunction readLine() {\n  return inputString[currentLine++];\n}\n\nfunction main() {\n  let N = parseInt(readLine());\n  console.log(checkAgeGroup(N));\n}",
                    "language": "NODE_JS",
                    "default_code": true
                  }
                ],
                "complexity_analysis": {
                  "content": "",
                  "content_type": ""
                }
              }
            ],
            "hints": [],
            "code_metadata": [
              {
                "is_editable": true,
                "language": "NODE_JS",
                "code_data": "\"use strict\";\nprocess.stdin.resume();\nprocess.stdin.setEncoding(\"utf-8\");\nlet inputString = \"\";\nlet currentLine = 0;\nprocess.stdin.on(\"data\", (inputStdin) => {\n    inputString += inputStdin;\n});\n\nprocess.stdin.on(\"end\", (_) => {\n    inputString = inputString\n        .trim()\n        .split(\"\\n\")\n        .map((str) => str.trim());\n    main();\n\n});\n\n\n//Don't modify above code\n\nfunction checkAgeGroup(num) {\n  //Write your code here\n \n}\n\n\n//Don't modify code below\n\n\nfunction readLine() {\n    return inputString[currentLine++];\n}\n\nfunction main() {\n\n    let N = parseInt(readLine());\n    console.log(checkAgeGroup(N));\n}",
                "default_code": true
              }
            ],
            "cpp_python_time_factor": 0,
            "question_id": "447fa212-5cb0-41d8-92d1-17be23a15734",
            "tag_names": [
              "POOL_1",
              "DIFFICULTY_EASY",
              "IN_OFFLINE_EXAM",
              "TOPIC_DSA_CODING",
              "SOURCE_NI_ASSESMENT",
              "SUB_TOPIC_STRING",
              "COMPANY_UNKNOWN",
              "447fa212-5cb0-41d8-92d1-17be23a15734"
            ],
            "language_code_repository_details": []
          }
  ]
}

/*{
    "question1":[
            {
                "input_output": [
                {
                    "input": [
                    {
                        "input": "9 3 1 ",
                        "output": "3",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 1,
                        "is_hidden": false
                    },
                    {
                        "input": "20 5 2",
                        "output": "8",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 2,
                        "is_hidden": false
                    },
                    {
                        "input": "1 1 1 ",
                        "output": "1",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 3,
                        "is_hidden": true
                    },
                    {
                        "input": "10 5 2",
                        "output": "4",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 4,
                        "is_hidden": true
                    },
                    {
                        "input": "50 10 2 ",
                        "output": "10",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 5,
                        "is_hidden": true
                    },
                    {
                        "input": "1000 100 10",
                        "output": "100",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 6,
                        "is_hidden": true
                    },
                    {
                        "input": "10000 500 20 ",
                        "output": "400",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 7,
                        "is_hidden": true
                    },
                    {
                        "input": "10 7 10 ",
                        "output": "13",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 8,
                        "is_hidden": true
                    },
                    {
                        "input": "20 15 8 ",
                        "output": "13",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 9,
                        "is_hidden": true
                    },
                    {
                        "input": "1000000 100000 100",
                        "output": "1000",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 10,
                        "is_hidden": true
                    }
                    ]
                }
                ],
                "question_text": "###Alex's Minimum Climb Time\nAlex needs to go from stair `0` to stair `N` in the least amount of time. \nHe can either go up `X` steps in  `K` seconds or up `1` step in each move, which takes `1` second. \nImplement the function `leastTimeToClimb` which will take `N`, `X` and `K` as arguments and return least time to reach `Nth` stair.\n\n---\n\n####Input Format\n- Single line containing 3 space-separated integers representing `N`, `X` and `K` respectively.\n\n---\n\n####Output Format\n- Single line having 1 integer representing least time to climb.\n\n---\n\n####Example 1\n###### Input\n    5 3 1\n\n######Output\n    3\n\n###### Explanation\nAlex can move from stair 0 to 1 in 1 seconds then from stair 1 to 4 in 1 seconds and finally from stair 4 to 5 in 1 seconds. Hence total time taken by him will be 3 seconds which is minimum.\n\n####Example 2\n###### Input\n    8 3 2\n\n######Output\n    6\n\n###### Explanation\nAlex can move from stair 0 to 3 in 2 seconds then from stair 3 to 5 in 2 seconds by taking 2 steps one by one and finally from stair 5 to 8 in 2 seconds. Hence total time taken by him will be 6 seconds which is minimum.\n\n---\n\n#### Constraints\n- 1<=`N`<=10<sup>6</sup>\n- 1<=`K`<=1000\n- 1<=`X`<=`N`\n\n---\n\n",
                "code_data": "",
                "short_text": "Alex's Minimum Climb Time",
                "question_type": "CODING",
                "question_key": 0,
                "skills": [],
                "question_format": "CODING_PRACTICE",
                "content_type": "MARKDOWN",
                "difficulty": "EASY",
                "remarks": "",
                "scores_updated": true,
                "scores_computed": 10,
                "questions_asked_by_companies_info": [],
                "test_case_evaluation_metrics": [
                {
                    "language": "C",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "CPP",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "PYTHON39",
                    "time_limit_to_execute_in_seconds": 10.01
                }
                ],
                "code_repository_details": null,
                "solutions": [
                {
                    "order": 1,
                    "title": {
                    "content": "Code",
                    "content_type": "TEXT"
                    },
                    "description": {
                    "content": "",
                    "content_type": ""
                    },
                    "code_details": [
                    {
                        "code_content": "def leastTimeToClimb(N: int, X: int, K: int) -> int:\n    # Calculate the minimum time to reach the Nth stair\n    time = 0\n\n    # While we can use the shortcut to skip multiple steps\n    while N >= X:\n        steps_to_take = N // X\n        time += steps_to_take * K\n        N -= steps_to_take * X\n\n    # Take 1 step per second for any remaining steps less than X\n    time += N\n    return time\n",
                        "language": "PYTHON39",
                        "default_code": true
                    }
                    ],
                    "complexity_analysis": {
                    "content": "",
                    "content_type": ""
                    }
                }
                ],
                "hints": [],
                "code_metadata": [
                {
                    "is_editable": true,
                    "language": "PYTHON39",
                    "code_data": "def leastTimeToClimb(N: int, X: int, K: int) -> int:\n    pass\n",
                    "default_code": true
                },
                {
                    "is_editable": true,
                    "language": "JAVA",
                    "code_data": "class Solution {\n    public int leastTimeToClimb(int N, int X, int K) {\n        // Implement the function\n    }\n}\n",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "CPP",
                    "code_data": "#include <bits/stdc++.h>\nusing namespace std;\n\n\nint leastTimeToClimb(int N, int X, int K) {\n    \n}\n",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "C",
                    "code_data": "#include <stdio.h>\r\nint leastTimeToClimb(int N, int X, int K) {\r\n        \r\n    }",
                    "default_code": false
                }
                ],
                "cpp_python_time_factor": 0,
                "question_id": "e6859056-258c-4350-bf62-6961c4ea9e4f",
                "tag_names": [
                "POOL_1",
                "DIFFICULTY_EASY",
                "IN_OFFLINE_EXAM",
                "TOPIC_PYTHON_CODING",
                "SOURCE_NI_ASSESMENT",
                "SUB_TOPIC_FUNCTIONS",
                "COMPANY_RECYKAL",
                "IS_PRIVATE",
                "e6859056-258c-4350-bf62-6961c4ea9e4f"
                ],
                "language_code_repository_details": [
                {
                    "language": "PYTHON39",
                    "file_path_to_execute": "main.py",
                    "default_file_path_to_submit_code": "solution.py",
                    "code_repository": [
                    {
                        "file_name": "main.py",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IHN5cwpmcm9tIHNvbHV0aW9uIGltcG9ydCAqCmRlZiBtYWluKCk6CiAgICAjIFJlYWQgaW5wdXQgdmFsdWVzIGZyb20gdGhlIHVzZXIKICAgIGlucHV0X2xpbmUgPSBpbnB1dCgpCiAgICBOLCBYLCBLID0gbWFwKGludCwgaW5wdXRfbGluZS5zcGxpdCgpKQogICAgCiAgICAjIENhbGwgdGhlIHByb2JsZW0gZnVuY3Rpb24KICAgIHJlc3VsdCA9IGxlYXN0VGltZVRvQ2xpbWIoTiwgWCwgSykKICAgIAogICAgIyBPdXRwdXQgdGhlIHJlc3VsdAogICAgcHJpbnQocmVzdWx0KQoKIyBDYWxsIG1haW4gZnVuY3Rpb24KaWYgX19uYW1lX18gPT0gIl9fbWFpbl9fIjoKICAgIG1haW4oKQ=="
                    }
                    ]
                },
                {
                    "language": "JAVA",
                    "file_path_to_execute": "Main.java",
                    "default_file_path_to_submit_code": "Solution.java",
                    "code_repository": [
                    {
                        "file_name": "Main.java",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewoKICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBtYWluKFN0cmluZ1tdIGFyZ3MpIHsKICAgICAgICBTY2FubmVyIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcihTeXN0ZW0uaW4pOwogICAgICAgIAogICAgICAgIC8vIFJlYWQgaW5wdXQgdmFsdWVzIGZyb20gdGhlIHVzZXIKICAgICAgICBTdHJpbmcgaW5wdXRMaW5lID0gc2Nhbm5lci5uZXh0TGluZSgpOwogICAgICAgIFN0cmluZ1tdIGlucHV0cyA9IGlucHV0TGluZS5zcGxpdCgiICIpOwogICAgICAgIAogICAgICAgIGludCBOID0gSW50ZWdlci5wYXJzZUludChpbnB1dHNbMF0pOwogICAgICAgIGludCBYID0gSW50ZWdlci5wYXJzZUludChpbnB1dHNbMV0pOwogICAgICAgIGludCBLID0gSW50ZWdlci5wYXJzZUludChpbnB1dHNbMl0pOwogICAgICAgIAogICAgICAgIC8vIENhbGwgdGhlIHByb2JsZW0gZnVuY3Rpb24KICAgICAgICAgICBTb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbigpOwogICAgICAgIGludCByZXN1bHQgPSBzb2x1dGlvbi5sZWFzdFRpbWVUb0NsaW1iKE4sIFgsIEspOwogICAgICAgIAogICAgICAgIC8vIE91dHB1dCB0aGUgcmVzdWx0CiAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKHJlc3VsdCk7CiAgICAgICAgCiAgICAgICAgc2Nhbm5lci5jbG9zZSgpOwogICAgfQoKfQo="
                    }
                    ]
                },
                {
                    "language": "CPP",
                    "file_path_to_execute": "main.cpp",
                    "default_file_path_to_submit_code": "solution.h",
                    "code_repository": [
                    {
                        "file_name": "main.cpp",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGUgPGlvc3RyZWFtPgojaW5jbHVkZSA8c3N0cmVhbT4KI2luY2x1ZGUic29sdXRpb24uaCIKdXNpbmcgbmFtZXNwYWNlIHN0ZDsKCi8vIERlY2xhcmUgdGhlIGZ1bmN0aW9uIHByb3RvdHlwZSBiZWZvcmUgdXNpbmcgaXQKaW50IGxlYXN0VGltZVRvQ2xpbWIoaW50IE4sIGludCBYLCBpbnQgSyk7CgppbnQgbWFpbigpIHsKICAgIHN0cmluZyBpbnB1dExpbmU7CiAgICBnZXRsaW5lKGNpbiwgaW5wdXRMaW5lKTsKICAgIGlzdHJpbmdzdHJlYW0gaXNzKGlucHV0TGluZSk7CiAgICAKICAgIGludCBOLCBYLCBLOwogICAgaXNzID4+IE4gPj4gWCA+PiBLOwogICAgCiAgICBpbnQgcmVzdWx0ID0gbGVhc3RUaW1lVG9DbGltYihOLCBYLCBLKTsKICAgIAogICAgY291dCA8PCByZXN1bHQgPDwgZW5kbDsKICAgIAogICAgcmV0dXJuIDA7Cn0K"
                    }
                    ]
                },
                {
                    "language": "C",
                    "file_path_to_execute": "main.c",
                    "default_file_path_to_submit_code": "solution.c",
                    "code_repository": [
                    {
                        "file_name": "main.c",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGUgPHN0ZGlvLmg+CmludCBsZWFzdFRpbWVUb0NsaW1iKGludCBOLCBpbnQgWCwgaW50IEspOwppbnQgbWFpbigpIHsKICAgIGludCBOLCBYLCBLOwogICAgCiAgICAvLyBSZWFkIGlucHV0IHZhbHVlcwogICAgc2NhbmYoIiVkICVkICVkIiwgJk4sICZYLCAmSyk7CiAgICAKICAgIC8vIENyZWF0ZSBTb2x1dGlvbiBpbnN0YW5jZSBhbmQgY2FsbCB0aGUgbWV0aG9kCiAgICAKICAgIGludCByZXN1bHQgPSBsZWFzdFRpbWVUb0NsaW1iKE4sIFgsIEspOwogICAgCiAgICAvLyBPdXRwdXQgdGhlIHJlc3VsdAogICAgcHJpbnRmKCIlZFxuIiwgcmVzdWx0KTsKICAgIAogICAgcmV0dXJuIDA7Cn0="
                    }
                    ]
                }
                ]
            },
            {
                "input_output": [
                {
                    "input": [
                    {
                        "input": "abc",
                        "output": "cza",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 11,
                        "is_hidden": false
                    },
                    {
                        "input": "iloveniat",
                        "output": "kjqtglkcr",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 12,
                        "is_hidden": false
                    },
                    {
                        "input": "yza",
                        "output": "wxc",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 13,
                        "is_hidden": true
                    },
                    {
                        "input": "xyz",
                        "output": "vwx",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 14,
                        "is_hidden": true
                    },
                    {
                        "input": "azbycxdwev",
                        "output": "cxzwavbugt",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 15,
                        "is_hidden": true
                    },
                    {
                        "input": "password",
                        "output": "ncqquqpb",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 16,
                        "is_hidden": true
                    },
                    {
                        "input": "security",
                        "output": "qgawpkrw",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 17,
                        "is_hidden": true
                    },
                    {
                        "input": "encryption",
                        "output": "glapwnrkql",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 18,
                        "is_hidden": true
                    },
                    {
                        "input": "alphabet",
                        "output": "cjnfczgr",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 19,
                        "is_hidden": true
                    },
                    {
                        "input": "database",
                        "output": "bcrczcqg",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 20,
                        "is_hidden": true
                    }
                    ]
                }
                ],
                "question_text": "### Password Encoding\nYou are given a password string `P` of length `N`. The password needs to be encoded before storing it to the database. The password string can be encoded using the following rules:\n\n- If the `k-th` character is a *vowel*, change it to the *second next character* in the alphabetical sequence. For example, the second next character of `o` is `q`.\n- If the `k-th` character is a *consonant*, change it to the *second previous character* in the alphabetical sequence. For example, the second previous character of `h` is `f`.\n\nImplement the function `encode` which will take password string `P` as argument and return encoded string.\n\n<MultiLineNote>\n1) The second next characters of `y` is `a` and `z` is `b`.<br>\n2) The second previous character of `b` is `z` and `a` is `y`.\n</MultiLineNote>\n\n---\n\n####Input Format\n- Single line containing password string.\n\n---\n\n####Output Format\n- Single line containing encoded password string.\n\n---\n\n####Example 1\n######Input\n    abc\n######Output\n    cza\n######Explanation\na is vowel so change to c\nb is consonant so change to z\nc is consonant so change to a\nSo, encoded password for abc will be cza\n\n####Example 2\n######Input\n    iloveniat\n######Output\n    kjqtglkcr\n######Explanation\ni is vowel so change to k\nl is consonant so change to j\no is vowel so change to q\nv is consonant so change to t\ne is vowel so change to g\nn is consonant so change to l\ni is vowel so change to k\na is vowel so change to c\nt is consonant so change to r\nSo, encoded password for iloveniat will be kjqtglkcr\n\n---\n\n####Constraints\n- 1 <=`N`<= 10<sup>6</sup>\n- The password string `P` contains only lowercase alphabets.\n\n---\n",
                "code_data": "",
                "short_text": " Password Encoding",
                "question_type": "CODING",
                "question_key": 0,
                "skills": [],
                "question_format": "CODING_PRACTICE",
                "content_type": "MARKDOWN",
                "difficulty": "EASY",
                "remarks": "",
                "scores_updated": true,
                "scores_computed": 10,
                "questions_asked_by_companies_info": [],
                "test_case_evaluation_metrics": [
                {
                    "language": "C",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "CPP",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "PYTHON39",
                    "time_limit_to_execute_in_seconds": 10.01
                }
                ],
                "code_repository_details": null,
                "solutions": [
                {
                    "order": 1,
                    "title": {
                    "content": "Code",
                    "content_type": "TEXT"
                    },
                    "description": {
                    "content": "",
                    "content_type": ""
                    },
                    "code_details": [
                    {
                        "code_content": "def encode(P: str) -> str:\n    vowels = {'a', 'e', 'i', 'o', 'u'}\n    encoded_chars = []\n    \n    for char in P:\n        if char in vowels:\n            new_char = chr((ord(char) - ord('a') + 2) % 26 + ord('a'))\n        else:\n            new_char = chr((ord(char) - ord('a') - 2) % 26 + ord('a'))\n        \n        encoded_chars.append(new_char)\n    \n    return ''.join(encoded_chars)",
                        "language": "PYTHON39",
                        "default_code": true
                    }
                    ],
                    "complexity_analysis": {
                    "content": "",
                    "content_type": ""
                    }
                }
                ],
                "hints": [],
                "code_metadata": [
                {
                    "is_editable": true,
                    "language": "PYTHON39",
                    "code_data": "def encode(P: str) -> str:\n    pass",
                    "default_code": true
                },
                {
                    "is_editable": true,
                    "language": "JAVA",
                    "code_data": "class Solution {\r\n\r\n\r\n    public static String encode(String P) {\r\n        \r\n\r\n    }\r\n}",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "CPP",
                    "code_data": "#include <string>\nusing namespace std;\n\nstring encode(string P) {\n    \n}\n",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "C",
                    "code_data": "#include <string.h>  // Include string.h to use string functions\r\n\r\n// Define the encode function\r\nvoid encode(char* P) {\r\n    \r\n}\r\n",
                    "default_code": false
                }
                ],
                "cpp_python_time_factor": 0,
                "question_id": "a5e0c308-9ccb-45d5-889b-def30efaaabd",
                "tag_names": [
                "POOL_1",
                "DIFFICULTY_EASY",
                "IN_OFFLINE_EXAM",
                "TOPIC_PYTHON_CODING",
                "SOURCE_NI_ASSESMENT",
                "SUB_TOPIC_FUNCTIONS",
                "COMPANY_RECYKAL",
                "IS_PRIVATE",
                "a5e0c308-9ccb-45d5-889b-def30efaaabd"
                ],
                "language_code_repository_details": [
                {
                    "language": "PYTHON39",
                    "file_path_to_execute": "main.py",
                    "default_file_path_to_submit_code": "solution.py",
                    "code_repository": [
                    {
                        "file_name": "main.py",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IHN5cwpmcm9tIHNvbHV0aW9uIGltcG9ydCAqCgojIE1haW4gZnVuY3Rpb24KaWYgX19uYW1lX18gPT0gIl9fbWFpbl9fIjoKICAgIFAgPSBpbnB1dCgpLnN0cmlwKCkKICAgIHByaW50KGVuY29kZShQKSkK"
                    }
                    ]
                },
                {
                    "language": "JAVA",
                    "file_path_to_execute": "Main.java",
                    "default_file_path_to_submit_code": "Solution.java",
                    "code_repository": [
                    {
                        "file_name": "Main.java",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IGphdmEudXRpbC4qOw0KcHVibGljIGNsYXNzIE1haW57DQpwdWJsaWMgc3RhdGljIHZvaWQgbWFpbihTdHJpbmdbXSBhcmdzKSB7DQogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7DQogICAgICAgIA0KICAgICAgICBTdHJpbmcgUCA9IHNjYW5uZXIubmV4dExpbmUoKTsNCiAgICAgICAgU29sdXRpb24gc29sdXRpb24gPSBuZXcgU29sdXRpb24oKTsNCiAgICAgICAgU3lzdGVtLm91dC5wcmludGxuKHNvbHV0aW9uLmVuY29kZShQKSk7DQogICAgICAgIHNjYW5uZXIuY2xvc2UoKTsNCiAgICB9DQp9DQ=="
                    }
                    ]
                },
                {
                    "language": "CPP",
                    "file_path_to_execute": "main.cpp",
                    "default_file_path_to_submit_code": "solution.h",
                    "code_repository": [
                    {
                        "file_name": "main.cpp",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGUgPGJpdHMvc3RkYysrLmg+CiNpbmNsdWRlInNvbHV0aW9uLmgiCgp1c2luZyBuYW1lc3BhY2Ugc3RkOwoKLy8gRnVuY3Rpb24gZGVjbGFyYXRpb24Kc3RyaW5nIGVuY29kZShzdHJpbmcgUCk7CgppbnQgbWFpbigpIHsKICAgIHN0cmluZyBQOwogICAgY2luID4+IFA7CiAgICBjb3V0IDw8IGVuY29kZShQKSA8PCBlbmRsOyAgLy8gQ2FsbCB0aGUgZW5jb2RlIGZ1bmN0aW9uCiAgICByZXR1cm4gMDsKfQo="
                    }
                    ]
                },
                {
                    "language": "C",
                    "file_path_to_execute": "main.c",
                    "default_file_path_to_submit_code": "solution.c",
                    "code_repository": [
                    {
                        "file_name": "main.c",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGUgPHN0ZGlvLmg+CiNpbmNsdWRlIDxzdHJpbmcuaD4gIC8vIEluY2x1ZGUgc3RyaW5nLmggdG8gdXNlIHN0cmluZyBmdW5jdGlvbnMKCi8vIERlY2xhcmUgdGhlIGVuY29kZSBmdW5jdGlvbgp2b2lkIGVuY29kZShjaGFyKiBQKTsKCmludCBtYWluKCkgewogICAgY2hhciBQWzEwMF07ICAvLyBEZWNsYXJlIGEgc3RyaW5nIHdpdGggYSBtYXhpbXVtIHNpemUgb2YgMTAwCiAgICBzY2FuZigiJXMiLCBQKTsgIC8vIFJlYWQgaW5wdXQgc3RyaW5nCiAgICBlbmNvZGUoUCk7ICAvLyBDYWxsIHRoZSBlbmNvZGUgZnVuY3Rpb24KICAgIHByaW50ZigiJXNcbiIsIFApOyAgLy8gUHJpbnQgdGhlIGVuY29kZWQgc3RyaW5nCiAgICByZXR1cm4gMDsKfQo="
                    }
                    ]
                }
                ]
            },
            {
                "input_output": [
                {
                    "input": [
                    {
                        "input": "16 65 100",
                        "output": "6516",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 21,
                        "is_hidden": false
                    },
                    {
                        "input": "91 92 0",
                        "output": "91",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 22,
                        "is_hidden": false
                    },
                    {
                        "input": "92 50 74",
                        "output": "3792",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 23,
                        "is_hidden": true
                    },
                    {
                        "input": "45 91 33",
                        "output": "3048",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 24,
                        "is_hidden": true
                    },
                    {
                        "input": "78 56 60",
                        "output": "3438",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 25,
                        "is_hidden": true
                    },
                    {
                        "input": "99 14 40",
                        "output": "659",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 26,
                        "is_hidden": true
                    },
                    {
                        "input": "98 13 53",
                        "output": "787",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 27,
                        "is_hidden": true
                    },
                    {
                        "input": "78 93 25",
                        "output": "2403",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 28,
                        "is_hidden": true
                    },
                    {
                        "input": "31 33 78",
                        "output": "2605",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 29,
                        "is_hidden": true
                    },
                    {
                        "input": "86 77 50",
                        "output": "3936",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 30,
                        "is_hidden": true
                    }
                    ]
                }
                ],
                "question_text": "### Total Energy Generated\nImplement a function `total_energy` to determine the total energy generated by combining two nuclear chemicals after `T` seconds, producing initial energy as `E` units. This energy `E` increases at a constant rate of `R` units every second. \n\nFunction `total_energy` will take `E`, `R` and `T` as first, second and third argument respectively and returns total energy after `T` seconds.\n\n---\n\n####Input Format\n- Single line containing 3 space-separated integers representing `E`, `R` and `T` respectively.\n\n---\n\n####Output Format\n- Single line having 1 integer representing total unit of energy after `T` seconds.\n\n---\n\n####Example 1\n######Input\n    5 2 3\n######Output\n    11\n######Explanation\nInitial energy is 5 units\nat time 1 second total energy will be 5+2 = 7\nat time 2 second total energy will be 7+2 = 9\nat time 3 second total energy will be 9+2 = 11\n\n---\n\n####Constraints\n- 0<`E, R, T`<1000\n\n---",
                "code_data": "",
                "short_text": "Total Energy Generated",
                "question_type": "CODING",
                "question_key": 0,
                "skills": [],
                "question_format": "CODING_PRACTICE",
                "content_type": "MARKDOWN",
                "difficulty": "EASY",
                "remarks": "",
                "scores_updated": true,
                "scores_computed": 10,
                "questions_asked_by_companies_info": [],
                "test_case_evaluation_metrics": [
                {
                    "language": "C",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "CPP",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "PYTHON39",
                    "time_limit_to_execute_in_seconds": 10.01
                }
                ],
                "code_repository_details": null,
                "solutions": [
                {
                    "order": 1,
                    "title": {
                    "content": "Code",
                    "content_type": "TEXT"
                    },
                    "description": {
                    "content": "",
                    "content_type": ""
                    },
                    "code_details": [
                    {
                        "code_content": "def total_energy(E, R, T):\n    return E + R * T\n",
                        "language": "PYTHON39",
                        "default_code": true
                    }
                    ],
                    "complexity_analysis": {
                    "content": "",
                    "content_type": ""
                    }
                }
                ],
                "hints": [],
                "code_metadata": [
                {
                    "is_editable": true,
                    "language": "PYTHON39",
                    "code_data": "def total_energy(E, R, T):\n    pass",
                    "default_code": true
                },
                {
                    "is_editable": true,
                    "language": "JAVA",
                    "code_data": "class Solution{\n    int total_energy(int E, int R, int T){\n        \n    }\n}",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "CPP",
                    "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint total_energy(int E, int R, int T){\n        \n}",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "C",
                    "code_data": "#include<stdio.h>\n\nint total_energy(int E, int R, int T){\r\n        \r\n}",
                    "default_code": false
                }
                ],
                "cpp_python_time_factor": 0,
                "question_id": "857113e4-713e-4f24-803d-cce46488647b",
                "tag_names": [
                "POOL_1",
                "DIFFICULTY_EASY",
                "IN_OFFLINE_EXAM",
                "TOPIC_PYTHON_CODING",
                "SOURCE_NI_ASSESMENT",
                "SUB_TOPIC_FUNCTIONS",
                "COMPANY_RECYKAL",
                "IS_PRIVATE",
                "857113e4-713e-4f24-803d-cce46488647b"
                ],
                "language_code_repository_details": [
                {
                    "language": "PYTHON39",
                    "file_path_to_execute": "main.py",
                    "default_file_path_to_submit_code": "solution.py",
                    "code_repository": [
                    {
                        "file_name": "main.py",
                        "file_type": "FILE",
                        "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgdG90YWxfZW5lcmd5CgpkZWYgbWFpbigpOgogICAgRSwgUiwgVCA9IG1hcChpbnQsIGlucHV0KCkuc3BsaXQoKSkKCiAgICBwcmludCh0b3RhbF9lbmVyZ3koRSxSLFQpKQogICAgCgppZiBfX25hbWVfXyA9PSAnX19tYWluX18nOgogICAgbWFpbigp"
                    }
                    ]
                },
                {
                    "language": "JAVA",
                    "file_path_to_execute": "Main.java",
                    "default_file_path_to_submit_code": "Solution.java",
                    "code_repository": [
                    {
                        "file_name": "Main.java",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IEUgPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICBpbnQgUiA9IHNjYW5uZXIubmV4dEludCgpOwogICAgICAgIGludCBUID0gc2Nhbm5lci5uZXh0SW50KCk7CiAgICAgICAgCiAgICAgICAgU29sdXRpb24gc29sdXRpb24gPSBuZXcgU29sdXRpb24oKTsKICAgICAgICBpbnQgcmVzdWx0ID0gc29sdXRpb24udG90YWxfZW5lcmd5KEUsUixUKTsKICAgICAgICAKICAgICAgICBTeXN0ZW0ub3V0LnByaW50KHJlc3VsdCk7CiAgICAgICAgCiAgICAgICAgc2Nhbm5lci5jbG9zZSgpOwogICAgfQp9Cg=="
                    }
                    ]
                },
                {
                    "language": "CPP",
                    "file_path_to_execute": "main.cpp",
                    "default_file_path_to_submit_code": "solution.h",
                    "code_repository": [
                    {
                        "file_name": "main.cpp",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4NCiNpbmNsdWRlInNvbHV0aW9uLmgiDQoNCnVzaW5nIG5hbWVzcGFjZSBzdGQ7DQoNCmludCBtYWluKCl7DQogICAgaW50IEUsUixUOw0KICAgIGNpbj4+RT4+Uj4+VDsNCiAgICANCiAgICBpbnQgcmVzdWx0ID0gdG90YWxfZW5lcmd5KEUsUixUKTsNCiAgICANCiAgICBjb3V0PDxyZXN1bHQ8PGVuZGw7DQogICAgcmV0dXJuIDA7DQp9"
                    }
                    ]
                },
                {
                    "language": "C",
                    "file_path_to_execute": "main.c",
                    "default_file_path_to_submit_code": "solution.c",
                    "code_repository": [
                    {
                        "file_name": "main.c",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50IHRvdGFsX2VuZXJneShpbnQsIGludCwgaW50KTsNCiNlbmRpZg0KDQppbnQgbWFpbigpew0KDQogICAgaW50IEUsUixUOw0KICAgIHNjYW5mKCIlZCAlZCAlZCIsICZFLCAmUiwgJlQpOw0KICAgIA0KICAgIGludCByZXN1bHQgPSB0b3RhbF9lbmVyZ3koRSxSLFQpOw0KICAgIHByaW50ZigiJWRcbiIsIHJlc3VsdCk7DQogICAgDQogICAgcmV0dXJuIDA7DQp9"
                    }
                    ]
                }
                ]
            },
            {
                "input_output": [
                {
                    "input": [
                    {
                        "input": "9 \n171 435 129 293 741 768 616 657 174",
                        "output": "2175",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 31,
                        "is_hidden": false
                    },
                    {
                        "input": "3 \n923 210 133",
                        "output": "0",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 32,
                        "is_hidden": false
                    },
                    {
                        "input": "800 \n816 311 905 175 298 925 63 124 734 627 164 798 622 367 22 64 621 349 208 672 486 130 388 115 956 830 464 426 364 465 326 598 682 278 764 361 694 26 482 469 454 568 809 530 762 35 289 121 519 843 432 456 297 149 249 539 211 969 384 317 253 282 535 66 236 110 833 577 881 269 384 279 512 196 364 318 598 936 657 469 665 313 375 879 200 705 738 738 606 308 493 514 138 543 160 295 933 288 763 451 817 572 266 723 469 536 751 32 464 873 939 768 687 758 635 375 629 60 60 37 861 326 20 586 666 281 759 383 577 162 135 887 586 298 714 633 520 185 703 892 736 514 181 776 906 71 932 756 46 662 437 807 518 235 119 562 316 115 802 913 598 441 274 873 700 407 296 516 416 182 191 849 195 657 366 810 43 824 600 565 590 166 181 730 283 58 987 351 710 560 997 211 763 422 669 126 474 563 228 527 17 274 369 666 122 745 211 145 171 924 866 350 542 830 946 589 29 796 788 663 63 665 927 792 316 929 951 935 158 269 206 147 721 135 73 550 146 472 811 538 988 123 615 948 800 972 426 861 244 992 195 131 68 580 715 90 59 819 46 626 800 517 996 199 231 973 913 19 351 294 171 954 737 373 104 988 629 643 908 569 799 419 3 456 951 418 611 103 787 91 507 273 691 394 562 389 774 164 800 877 303 95 0 661 76 783 907 757 539 927 323 237 86 37 603 192 845 138 601 108 107 705 661 896 866 346 50 5 295 358 677 180 291 789 274 646 888 323 871 535 63 15 793 999 27 568 961 319 329 620 834 409 479 181 865 945 540 693 607 256 857 911 184 812 298 654 195 696 33 805 92 119 697 801 710 55 118 805 837 778 734 618 388 953 573 833 538 319 644 14 201 191 414 635 299 742 217 572 895 32 200 208 695 340 463 994 885 955 573 323 690 45 819 839 480 76 874 470 231 323 199 771 185 147 106 103 737 563 754 861 476 412 578 218 818 668 528 270 647 503 506 188 412 779 963 559 446 947 133 742 958 262 879 64 930 686 381 569 857 248 369 995 945 594 70 328 288 733 875 424 724 549 898 110 294 501 835 209 460 304 133 88 193 969 98 918 669 96 600 384 67 952 824 449 124 892 880 442 652 35 436 55 901 18 565 878 280 965 561 721 329 548 526 407 683 54 568 409 408 848 194 431 854 765 562 604 208 88 173 537 985 875 833 480 449 650 925 634 853 625 477 600 104 699 797 588 321 6 730 10 168 24 759 618 909 350 719 182 567 585 256 736 697 766 465 538 13 364 913 411 336 659 401 919 644 793 498 401 228 843 736 342 935 373 54 984 625 123 868 3 66 652 544 821 983 440 595 821 16 250 903 878 580 749 482 689 486 235 446 703 642 22 991 110 552 40 479 285 268 402 859 542 176 123 259 219 756 191 597 194 969 255 945 251 899 485 968 809 667 483 314 970 727 433 190 794 974 37 935 615 924 26 403 717 849 200 98 558 273 104 338 586 286 693 927 735 302 470 752 125 646 554 743 657 534 236 375 561 341 836 82 22 380 765 190 971 252 552 794 676 92 589 764 272 742 405 796 987 869 362 195 529 441 15 106 661 604 976 756 926 675 71 104 156 519 187 791 738 863 144 682 973 337 280 474 409 667 303 448 641 740 898 191 655 109 459 956 74 403 375 683 924 945 940 278 468 723 563 769 843 700 398 886 101 741 749 121 470 286 257 645 522 661 32 377 15 616 687 910 232 493 515 655 190 594 618 728 234 934 740 395 467 335 768 219 976 401 676 924 967 94 581 873 563 481 582 629 438 7 357",
                        "output": "201160",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 33,
                        "is_hidden": true
                    },
                    {
                        "input": "63 \n337 370 410 459 889 709 937 715 746 771 611 349 357 25 721 834 445 800 321 459 36 591 697 529 144 519 297 242 610 579 52 917 289 717 882 83 900 781 594 235 987 944 17 314 544 838 635 147 836 63 698 421 226 172 783 84 348 9 279 835 159 83 11",
                        "output": "17022",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 34,
                        "is_hidden": true
                    },
                    {
                        "input": "89 \n747 357 58 34 366 813 478 22 884 360 155 996 147 682 964 718 522 756 762 520 387 935 905 441 118 204 615 129 570 498 101 838 82 266 376 472 7 586 881 159 362 251 758 598 43 912 771 369 500 723 256 455 989 525 8 389 79 711 755 325 834 872 309 644 894 170 287 556 378 465 780 100 880 341 333 736 851 392 225 582 579 758 763 350 344 289 861 171 711",
                        "output": "19022",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 35,
                        "is_hidden": true
                    },
                    {
                        "input": "48 \n299 609 617 393 768 247 213 508 851 816 758 534 294 349 418 538 168 796 569 824 648 765 970 417 365 463 294 285 907 520 88 822 672 793 214 281 807 675 159 236 651 401 934 52 138 309 201 503",
                        "output": "12854",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 36,
                        "is_hidden": true
                    },
                    {
                        "input": "693 \n826 976 685 188 450 876 102 242 649 453 48 193 121 483 826 962 951 415 405 393 947 972 465 102 961 617 752 602 44 404 668 303 444 687 695 110 916 855 24 200 803 793 351 970 151 123 789 388 985 513 41 529 929 67 971 957 567 849 484 449 792 542 453 16 579 985 995 824 926 484 665 46 736 245 295 914 946 245 847 88 591 634 703 957 827 708 401 817 804 446 660 885 732 609 53 838 507 556 782 168 793 15 218 906 127 857 268 734 96 872 865 653 52 243 312 298 157 839 788 266 797 865 528 61 682 245 752 960 842 79 975 730 901 83 415 38 786 426 885 810 64 447 143 236 194 663 693 54 499 82 137 834 61 289 872 139 410 749 951 454 754 642 648 92 818 885 290 879 366 364 900 859 136 768 294 284 346 60 946 635 162 196 907 399 730 464 666 445 832 177 471 666 567 508 195 346 179 378 681 724 337 233 507 947 544 765 536 767 851 796 430 320 165 142 925 324 334 265 907 568 849 786 430 97 61 554 616 718 581 136 951 664 956 878 245 417 537 277 985 2 16 395 472 411 950 659 787 951 848 502 8 883 171 264 422 554 35 695 781 638 549 709 340 158 910 428 875 891 990 700 496 427 240 679 682 92 469 508 43 132 368 678 820 379 553 318 140 776 420 964 879 271 839 587 702 715 816 334 96 117 76 152 739 565 244 214 775 483 622 539 380 423 116 205 754 897 788 286 44 894 211 807 570 492 322 215 381 671 550 930 181 360 92 960 399 208 462 711 565 729 130 466 371 825 22 983 453 864 130 626 385 341 91 975 780 725 624 35 171 966 920 37 534 674 534 730 47 236 888 33 928 15 488 92 116 164 28 382 404 796 900 463 117 602 716 670 845 371 525 692 835 204 161 373 211 63 309 170 578 697 40 950 195 784 661 672 495 675 58 54 943 670 269 6 949 254 130 749 71 269 323 674 134 348 772 441 697 972 139 582 435 690 497 137 766 930 712 188 346 880 322 395 102 616 935 423 859 237 682 73 507 406 323 601 82 53 253 521 17 935 88 245 763 137 969 323 512 344 935 77 967 611 825 537 361 632 736 354 290 371 320 984 766 748 558 617 347 213 740 59 901 997 634 851 994 212 238 820 684 175 170 106 157 688 358 271 648 325 879 491 167 314 984 593 889 76 344 589 589 221 334 966 969 399 544 253 600 530 932 724 32 260 766 428 385 812 709 432 37 951 589 986 943 32 626 838 817 931 270 734 780 48 691 58 381 426 751 239 632 91 688 953 874 297 68 223 71 493 579 724 911 916 409 368 262 320 534 654 515 888 60 376 78 944 645 872 641 399 806 450 958 4 778 537 865 291 397 968 153 86 307 219 954 467 53 588 459 339 478 214 49 608 988 468 977 664 182 429 99 460 329 708 354 992 516 337 762 722 362 685 176 74 964 986 379 398 826 81 76 256 487 514 89 888 825 80 792 74 399 251 156 800 674 262 364 660 909 35 835 442 49 849 891 917 441 78 890 144 140 272 878 954 819 960 539 592 83 100 789 695 470 315 421 863 365 402 389 280 709 151 838 496 808",
                        "output": "165064",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 37,
                        "is_hidden": true
                    },
                    {
                        "input": "335 \n866 500 469 139 291 487 824 232 841 679 834 398 83 438 791 265 886 161 427 651 621 394 978 980 767 766 996 382 541 981 417 603 803 570 576 338 168 959 846 289 135 270 630 369 338 498 109 814 766 722 320 775 790 310 244 330 970 443 925 253 859 304 275 594 446 29 40 268 61 629 959 664 175 717 290 683 683 526 484 272 667 746 737 407 821 380 442 581 243 343 281 891 683 661 110 326 379 799 764 890 0 543 225 423 413 522 224 234 9 937 129 642 75 604 267 341 546 810 890 896 114 227 115 195 428 683 617 167 0 56 845 814 734 998 666 714 754 822 584 699 157 985 869 33 429 579 805 666 965 731 499 819 963 526 276 283 219 681 873 762 887 610 236 46 98 462 540 350 920 580 927 755 278 125 658 857 194 709 351 267 115 541 255 952 50 721 373 240 493 876 916 139 751 865 255 35 944 467 944 949 167 566 796 129 535 28 502 614 431 648 363 254 85 619 2 127 63 219 111 106 31 547 276 512 142 535 937 264 251 18 784 388 518 861 654 925 277 558 484 135 103 792 52 330 785 811 244 606 742 405 857 746 135 253 806 726 30 373 848 180 789 265 71 676 174 580 896 721 626 538 938 211 485 318 503 848 462 838 612 70 465 856 736 798 717 392 343 293 181 403 683 861 962 713 703 191 656 302 777 506 488 579 158 932 263 336 58 394 602 695 654 613 220 963 411 431 524 704 464 204 963 419 371 942 809 11 643 631 729 339 794 172 402 398 163",
                        "output": "83736",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 38,
                        "is_hidden": true
                    },
                    {
                        "input": "594 \n153 488 657 67 955 787 995 754 860 870 729 348 341 172 569 283 441 826 881 379 84 787 662 617 842 486 83 898 301 54 959 697 278 814 651 799 817 190 904 48 392 615 579 749 804 93 213 521 916 629 816 923 6 534 503 852 607 857 569 540 334 127 802 403 317 747 242 983 520 675 297 203 962 859 838 57 622 767 448 354 117 351 806 657 243 336 487 334 535 440 340 246 565 154 643 996 941 313 89 536 450 317 319 728 470 495 222 67 939 737 77 280 263 264 927 671 780 666 326 486 654 627 259 439 91 172 710 549 119 331 235 621 389 328 624 947 112 126 141 452 599 643 324 331 549 539 943 812 20 157 40 116 480 869 842 882 610 637 799 913 771 818 788 331 481 948 977 176 22 97 876 135 384 830 121 903 976 355 137 362 377 240 722 264 220 569 929 407 934 973 434 346 240 375 22 670 838 540 718 883 456 504 768 440 527 509 300 970 431 524 630 597 391 180 605 129 790 463 181 52 128 240 541 377 577 387 505 643 490 832 133 206 444 335 571 22 411 721 22 64 293 287 557 94 940 613 979 154 77 908 372 596 760 551 607 906 378 341 337 897 970 878 511 270 881 103 118 664 785 648 437 4 392 889 891 719 64 640 336 608 602 998 892 348 961 180 175 619 445 898 37 685 788 555 291 433 305 672 679 687 6 980 173 645 991 780 576 299 308 799 184 724 204 874 564 401 94 55 553 860 152 93 793 432 386 316 156 221 104 889 60 96 164 585 143 969 932 70 608 739 551 692 842 17 259 98 626 291 369 758 846 536 116 541 263 122 611 955 965 816 53 194 440 616 223 579 968 913 94 733 288 292 527 303 827 937 355 94 94 796 504 151 602 314 499 106 669 472 807 663 154 975 823 200 679 667 907 429 791 35 414 823 562 968 967 50 710 790 799 936 388 857 160 27 303 972 571 708 882 949 47 138 477 177 153 996 114 854 155 819 52 71 739 125 61 373 168 974 856 690 760 661 939 559 472 880 600 512 107 631 332 80 111 690 937 93 9 784 875 183 355 785 281 88 253 473 177 724 644 598 173 365 231 306 498 319 606 385 720 306 492 210 70 661 67 773 171 697 754 457 917 229 814 935 983 729 893 403 565 653 899 543 87 155 872 234 130 392 173 19 200 234 873 682 344 259 269 212 41 228 414 43 330 503 727 249 725 737 68 742 788 407 134 494 680 618 167 366 208 718 524 315 794 959 698 304 564 529 724 648 631 90 962 333 467 40 152 995 771 356 901 309 774 554 956 360 277 135 995 582 291 698 210 601 528 425 131 57 644 172 326 522 534 633 292 623 275 615 509 314 746 587 240 717",
                        "output": "152179",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 39,
                        "is_hidden": true
                    },
                    {
                        "input": "576 \n279 973 875 278 270 903 110 630 948 453 510 91 939 864 149 790 353 690 303 910 769 599 590 682 469 929 210 964 141 695 769 639 864 844 71 134 676 32 625 643 770 251 853 77 551 10 656 145 225 399 1000 597 134 405 979 74 95 507 757 305 876 247 858 511 608 576 844 452 31 454 6 306 3 497 624 528 840 965 547 918 76 4 825 440 394 826 363 997 394 413 237 161 62 196 737 836 488 482 101 553 150 280 657 52 577 993 737 595 442 21 495 927 864 491 345 383 110 180 696 208 374 15 473 3 353 318 203 794 97 339 277 468 782 789 13 642 663 732 114 288 218 545 222 282 413 712 611 131 915 417 923 932 284 635 315 222 373 777 769 105 932 60 886 898 700 722 467 293 204 813 590 668 181 736 918 710 69 213 111 612 23 867 671 671 339 962 518 798 771 907 318 83 110 25 795 88 778 397 612 543 335 669 713 41 74 786 530 839 414 348 272 966 550 944 178 300 260 702 752 15 430 382 679 72 927 335 0 426 558 385 993 613 508 243 53 296 565 329 154 69 315 642 913 541 495 734 108 83 108 787 821 555 709 29 323 575 728 778 862 769 474 154 375 826 805 518 41 902 594 604 64 207 203 458 257 115 815 188 995 971 523 880 817 902 206 627 587 219 257 208 209 616 176 587 33 828 427 590 730 139 806 484 266 699 574 737 628 505 84 901 528 870 91 994 22 886 705 837 417 31 874 479 927 150 980 446 636 364 339 661 809 347 640 249 478 81 434 286 95 597 170 687 147 760 354 197 553 536 529 476 231 969 698 203 967 982 442 625 137 123 590 709 557 550 525 507 121 398 70 823 485 910 911 304 24 299 297 693 556 390 134 894 352 765 425 331 713 472 787 470 313 566 757 805 379 478 550 841 487 930 760 676 587 13 39 212 580 956 696 200 437 234 399 339 583 324 13 408 469 578 716 707 151 698 541 666 345 299 207 643 171 365 569 777 239 913 259 186 3 461 26 376 655 462 944 822 53 883 908 387 324 541 116 957 858 858 937 31 58 733 719 213 35 889 683 604 337 365 351 416 418 275 282 794 1 182 997 569 131 437 813 733 890 513 464 224 737 944 409 59 975 959 871 129 265 892 822 660 497 713 995 508 11 517 873 596 873 232 790 230 851 730 778 234 32 465 332 187 833 549 519 947 926 986 0 89 421 146 384 36 260 61 673 375 375 715 941 415 839 320 916 632 810 227 997 801 342 533 670 1000 164 407 783 282 672 277 360 561 892 883 404 283 193 334 241 570 162 240 246 83 303 830 857 905 607 245",
                        "output": "134056",
                        "score": 1,
                        "testcase_type": "NORMAL_CASE",
                        "t_id": 40,
                        "is_hidden": true
                    }
                    ]
                }
                ],
                "question_text": "###Good Number Sum\nFor a list of integers `nums`, <HighlightedText>nums[i]</HighlightedText> is said to be <HighlightedText>Good Number</HighlightedText> if parity of <HighlightedText>i</HighlightedText> and <HighlightedText>nums[i]</HighlightedText> will be same.\n\nImplement the function `count_good_number` which will take `n`, size of list and `nums` as argument and return an integer, count of good number in the list.\n\n---\n\n#### Input Format\n- First line contains an integer `n`, the size of `nums`.\n- Second line contains `n` space-separated integers, numbers in list.\n\n---\n\n#### Output Format\n- One line containing an integer, the count of good numbers.\n\n---\n\n####Example 1\n######Input\n    3\n    1 2 3\n    \n######Output\n    0\n\n######Explanation\n\n- For `i = 0`, `nums[0] = 1`, 1 % 2 = 1 and i % 2 = 0. Not a good number.\n- For `i = 1`, `nums[1] = 2`, 2 % 2 = 0 and i % 2 = 1. Not a good number.\n- For `i = 2`, `nums[2] = 3`, 3 % 2 = 1 and i % 2 = 0. Not a good number.\n\nHence, the answer is `0`.\n\n\n####Example 2\n######Input\n    4\n    2 3 4 5\n    \n######Output\n    14\n\n######Explanation\n- For `i = 0`, `values[0] = 2`, 2 % 2 = 0 and i % 2 = 0. Good number.\n- For `i = 1`, `values[1] = 3`, 3 % 2 = 1 and i % 2 = 1. Good number.\n- For `i = 2`, `values[2] = 4`, 4 % 2 = 0 and i % 2 = 0. Good number.\n- For `i = 3`, `values[3] = 5`, 5 % 2 = 1 and i % 2 = 1. Good number.\n\nSum of elements added: `2 + 3 + 4 + 5 = 14`.\nHence, the answer is `14`.\n\n---\n\n#### Constraints\n- 1 <=`nums.size()`<= 10<sup>6</sup>\n- 1 <=`nums[i]`<= 1000\n\n---\n",
                "code_data": "",
                "short_text": "Good Number Sum",
                "question_type": "CODING",
                "question_key": 0,
                "skills": [],
                "question_format": "CODING_PRACTICE",
                "content_type": "MARKDOWN",
                "difficulty": "EASY",
                "remarks": "",
                "scores_updated": true,
                "scores_computed": 10,
                "questions_asked_by_companies_info": [],
                "test_case_evaluation_metrics": [
                {
                    "language": "C",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "CPP",
                    "time_limit_to_execute_in_seconds": 2.01
                },
                {
                    "language": "PYTHON39",
                    "time_limit_to_execute_in_seconds": 10.01
                }
                ],
                "code_repository_details": null,
                "solutions": [
                {
                    "order": 1,
                    "title": {
                    "content": "Code",
                    "content_type": "TEXT"
                    },
                    "description": {
                    "content": "",
                    "content_type": ""
                    },
                    "code_details": [
                    {
                        "code_content": "def count_good_number(n, nums):\n    good_sum = 0  \n    \n    for i in range(n):\n        if nums[i] % 2 == i % 2:  \n            good_sum += nums[i]  \n    \n    return good_sum\n    ",
                        "language": "PYTHON39",
                        "default_code": true
                    }
                    ],
                    "complexity_analysis": {
                    "content": "",
                    "content_type": ""
                    }
                }
                ],
                "hints": [],
                "code_metadata": [
                {
                    "is_editable": true,
                    "language": "PYTHON39",
                    "code_data": "def count_good_number(n, nums):\n    pass\n    ",
                    "default_code": true
                },
                {
                    "is_editable": true,
                    "language": "JAVA",
                    "code_data": "class Solution{\n    int count_good_number(int n, int[] nums){\n        \n    }\n}",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "CPP",
                    "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint count_good_number(int n, vector<int> nums){\n        \n}",
                    "default_code": false
                },
                {
                    "is_editable": true,
                    "language": "C",
                    "code_data": "#include<stdio.h>\n\nint count_good_number(int n, int nums[]){\n        \n}",
                    "default_code": false
                }
                ],
                "cpp_python_time_factor": 0,
                "question_id": "312063b7-3ba3-4d64-ab4c-c3feb1f1f397",
                "tag_names": [
                "POOL_1",
                "DIFFICULTY_EASY",
                "IN_OFFLINE_EXAM",
                "TOPIC_PYTHON_CODING",
                "SOURCE_NI_ASSESMENT",
                "SUB_TOPIC_FUNCTIONS",
                "COMPANY_RECYKAL",
                "IS_PRIVATE",
                "312063b7-3ba3-4d64-ab4c-c3feb1f1f397"
                ],
                "language_code_repository_details": [
                {
                    "language": "PYTHON39",
                    "file_path_to_execute": "main.py",
                    "default_file_path_to_submit_code": "solution.py",
                    "code_repository": [
                    {
                        "file_name": "main.py",
                        "file_type": "FILE",
                        "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgY291bnRfZ29vZF9udW1iZXIKCmRlZiBtYWluKCk6CiAgICBuID0gaW50KGlucHV0KCkpCiAgICBudW1zID0gbGlzdChtYXAoaW50LCBpbnB1dCgpLnNwbGl0KCkpKQogICAgCiAgICBwcmludChjb3VudF9nb29kX251bWJlcihuLG51bXMpKQogICAgCgppZiBfX25hbWVfXyA9PSAnX19tYWluX18nOgogICAgbWFpbigp"
                    }
                    ]
                },
                {
                    "language": "JAVA",
                    "file_path_to_execute": "Main.java",
                    "default_file_path_to_submit_code": "Solution.java",
                    "code_repository": [
                    {
                        "file_name": "Main.java",
                        "file_type": "FILE",
                        "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IG4gPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICBpbnRbXSBudW1iZXJzID0gbmV3IGludFtuXTsKICAgICAgICAKICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IG47IGkrKykgewogICAgICAgICAgICBudW1iZXJzW2ldID0gc2Nhbm5lci5uZXh0SW50KCk7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIFNvbHV0aW9uIHNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKCk7CiAgICAgICAgaW50IHJlc3VsdCA9IHNvbHV0aW9uLmNvdW50X2dvb2RfbnVtYmVyKG4sIG51bWJlcnMpOwogICAgICAgIAogICAgICAgIFN5c3RlbS5vdXQucHJpbnQocmVzdWx0KTsKICAgICAgICAKICAgICAgICBzY2FubmVyLmNsb3NlKCk7CiAgICB9Cn0K"
                    }
                    ]
                },
                {
                    "language": "CPP",
                    "file_path_to_execute": "main.cpp",
                    "default_file_path_to_submit_code": "solution.h",
                    "code_repository": [
                    {
                        "file_name": "main.cpp",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgaW50IG47CiAgICBjaW4+Pm47CiAgICAKICAgIHZlY3RvcjxpbnQ+IG51bWJlcnMobik7CiAgICAKICAgIGZvcihpbnQgaT0wO2k8bjtpKyspewogICAgICAgIGNpbj4+bnVtYmVyc1tpXTsKICAgIH0KICAgIAogICAgaW50IHJlc3VsdCA9IGNvdW50X2dvb2RfbnVtYmVyKG4sIG51bWJlcnMpOwoKICAgIGNvdXQ8PHJlc3VsdDw8ZW5kbDsKCiAgICByZXR1cm4gMDsKfQ=="
                    }
                    ]
                },
                {
                    "language": "C",
                    "file_path_to_execute": "main.c",
                    "default_file_path_to_submit_code": "solution.c",
                    "code_repository": [
                    {
                        "file_name": "main.c",
                        "file_type": "FILE",
                        "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50IGNvdW50X2dvb2RfbnVtYmVyKGludCwgaW50W10pOw0KI2VuZGlmDQoNCmludCBtYWluKCl7DQogICAgaW50IG47DQogICAgc2NhbmYoIiVkIiwgJm4pOw0KICAgIA0KICAgIGludCBudW1iZXJzWzEwMDFdOw0KICAgIA0KICAgIGZvcihpbnQgaT0wO2k8bjtpKyspew0KICAgICAgICBzY2FuZigiJWQiLCZudW1iZXJzW2ldKTsNCiAgICB9DQogICAgDQogICAgaW50IHJlc3VsdCA9IGNvdW50X2dvb2RfbnVtYmVyKG4sIG51bWJlcnMpOw0KICAgIA0KICAgIHByaW50ZigiJWQgIiwgcmVzdWx0KTsNCiAgICANCiAgICByZXR1cm4gMDsNCn0="
                    }
                    ]
                }
                ]
            }
    ],
    "question2":[
        {
        "input_output": [
        {
            "input": [
            {
                "input": "123456789",
                "output": "3",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 41,
                "is_hidden": false
            },
            {
                "input": "2344432",
                "output": "2",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 42,
                "is_hidden": false
            },
            {
                "input": "56138162360217253705917597459217387044509400136559934396968406638510034992098138333115399304582946904383666048584087784280600655754601022180892165694170867532808293309733084549158195063731851535105626132685658420859825015038898628741494729402627133471526647216683746898951910560977040647989672489495292561475609552140815869887768342676506292062436967975581717607662426581300047997900191898492502943031458129904157249869625298513757501591346482233007011857834729175798611396195525061527712325157444795436365654646427989426595251467398835345784577163857043018935942226733017887881697890902942021867952103314603775304907228810374278272904847088025249156514904583878529515523881798794067753642413689958534126615795335624655116950097789683238756539905259412768575442345",
                "output": "15",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 43,
                "is_hidden": true
            },
            {
                "input": "1804218117468550707744513753387079358105939014062075683",
                "output": "0",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 44,
                "is_hidden": true
            },
            {
                "input": "37014872808881872281142185589396530020345183128514276224765277275186017073216472906761475988225024306260325957118913833866858604069253088357177634888273534669643814106857755386661394825470986997002300218401191211912616047287406257920742199595170469655339312127390941480192861018431631672123788684535755512939373513164717551335679833055232090701253210478274021305834703432703048418721502361387213347719047328909900439054445929950384887311871189741016792183166492075931330357375453725101815867020514505497997461356523266275138164176939047775152944426939118873784137578217326288123992059946582857588415539242371746955794213673763314898475556469148045447749438218805204915155373997977085440793266110588989819808301961481406480000869421006888354196313592088392164080032595338145587465945135044070856598294231312236253060546002259168620953152745444625745925868594717414112211840676608125058208355488130851094305494047608680738796589112452337603679927738012832578385701642269095599629131811321699052",
                "output": "23",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 45,
                "is_hidden": true
            },
            {
                "input": "4408484315115258498823606020038274616772166907790220862699539973207355486822845787061764748883904355101565012518376692035268463760371178462837041430150034078618168740379653196580797289806361554666775382197182573114134370975627569548427431546266712959056989483735717487923710561837954899667119747309285350834565068933271096000546304212084017408118549378899929361952227893839476251590463263939275233608300180812439723077703338829147697757886710606547384414923640352921184393998722276531479600718379856574793620628626304585201653176323446252057550906461885204097457405245665997981509905468323997230323349067897279362194370000423290780902820955452155001881102011203038511762997895423573892573030689321145123350752265860146404579125909858158774523142699720639246143193069808243165140228796455967466040060395868147904000368197348086846313757955565354304174603635006160316",
                "output": "24",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 46,
                "is_hidden": true
            },
            {
                "input": "422928904028040372418541848368451345260954350468229212711394959929135867960727069939276461881836926305434744017495043899926008291174352102245857924957417196051011400900744028596274483285050603904682823565220033860129011010066374952029757777762147208624165285890674406151839650696709692325939381788972973052093",
                "output": "7",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 47,
                "is_hidden": true
            },
            {
                "input": "757651905443638971259045756778326084863407567035851877131824215330445720242651895488676725009057095795768385406959418201206627564517951290932439909649071158326364817835387847520238253800412857287039269956710020241970705689538910507429534858417721022372360157657545779786542339650200700877307430984591028149466483238382403373279481611219005307592471532792249270498279097557806721587142291438852164617814346573213654652405958336277744120567388659564817282760845704505506589255742476475321974074185776029587964132268403787870602745515592206371636027586949",
                "output": "13",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 48,
                "is_hidden": true
            },
            {
                "input": "95142478801799873856436701350303379550631407455012556163196079385491344801930967966949719910126145171755036429569937866009093869888118466573464873788587239375464041517619257948379289656352183830097946507156211679871469024490718529521415251852404",
                "output": "5",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 49,
                "is_hidden": true
            },
            {
                "input": "642152678046659283198059631376203384684255529873918562226425227988124535468452149695376758883080738907331142078577976631740091983432607243017364700084785769397695294323400331237819285019333040901521210447193047203229358559893101329399147346363899537803632555731576247204871416718687691662694444675559074738206089911081031608498020777213248034720877755353774010691333142005099510104569557615088970260725600591970720476229112394674329875753944060",
                "output": "22",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 50,
                "is_hidden": true
            }
            ]
        }
        ],
        "question_text": "### Valid Triplet Count\nImplement the function `triplet_count` which will take a string of numbers `sequence` as argument and returns count of valid triplets in the `sequence`.\n\n*A Triplet consists of either three identical numbers or three consecutive numbers. *\n\n<MultiLineNote>\n - sequence[i] can only be part of one triplet. *For sequence `33345` there will be only 1 valid sequence either `333` or `345` as middle 3 can be used at once.*\n - `123`, `321`, `111` all the valid triplets.\n</MultiLineNote>\n\n---\n\n####Input Format\n- Single line of input contains `sequence`\n\n---\n\n####Output\n- The output consists an integer representing the count of triplets.\n\n---\n\n####Example\n######Input\n    2255588999987\n######Output\n    3\n######Explanation\nHere, 3 valid triplets are \n\n- 555 from position (2,3,4)\n- 999 from position (7,8,9)\n- 987 from position (10,11,12)\n\n---\n\n####Constraints\n- 3 <=`sequence.size()`<= 1000\n- 0 <=`sequence[i]`<= 9\n- It is guaranteed that there will be at least one triple.\n\n---\n",
        "code_data": "",
        "short_text": "Valid Triplet Count",
        "question_type": "CODING",
        "question_key": 0,
        "skills": [],
        "question_format": "CODING_PRACTICE",
        "content_type": "MARKDOWN",
        "difficulty": "MEDIUM",
        "remarks": "",
        "scores_updated": true,
        "scores_computed": 10,
        "questions_asked_by_companies_info": [],
        "test_case_evaluation_metrics": [
        {
            "language": "C",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "CPP",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "PYTHON39",
            "time_limit_to_execute_in_seconds": 10.01
        }
        ],
        "code_repository_details": null,
        "solutions": [
        {
            "order": 1,
            "title": {
            "content": "Code",
            "content_type": "TEXT"
            },
            "description": {
            "content": "",
            "content_type": ""
            },
            "code_details": [
            {
                "code_content": "def triplet_count(sequence):\n    count = 0  \n    i = 0  \n    n = len(sequence)\n    \n    while i <= n - 3:  \n        triplet = sequence[i:i+3]\n        \n        if triplet[0] == triplet[1] == triplet[2]:\n            count += 1\n            i += 3  \n        elif (int(triplet[1]) - int(triplet[0]) == 1 and int(triplet[2]) - int(triplet[1]) == 1) or \\\n             (int(triplet[0]) - int(triplet[1]) == 1 and int(triplet[1]) - int(triplet[2]) == 1):\n            count += 1\n            i += 3  \n        else:\n            i += 1  \n\n    return count\n",
                "language": "PYTHON39",
                "default_code": true
            }
            ],
            "complexity_analysis": {
            "content": "",
            "content_type": ""
            }
        }
        ],
        "hints": [],
        "code_metadata": [
        {
            "is_editable": true,
            "language": "PYTHON39",
            "code_data": "def triplet_count(sequence):\n    pass",
            "default_code": true
        },
        {
            "is_editable": true,
            "language": "JAVA",
            "code_data": "class Solution{\n    int triplet_count(String sequence){\n        \n    }\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "CPP",
            "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint triplet_count(string sequence){\n        \n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "C",
            "code_data": "#include<stdio.h>\n\nint triplet_count(char sequence[]){\n        \n}",
            "default_code": false
        }
        ],
        "cpp_python_time_factor": 0,
        "question_id": "4e8e603c-6744-4f4b-b3c4-65ae4dd82317",
        "tag_names": [
        "POOL_1",
        "DIFFICULTY_MEDIUM",
        "IN_OFFLINE_EXAM",
        "TOPIC_PYTHON_CODING",
        "SOURCE_NI_ASSESMENT",
        "SUB_TOPIC_FUNCTIONS",
        "COMPANY_RECYKAL",
        "IS_PRIVATE",
        "4e8e603c-6744-4f4b-b3c4-65ae4dd82317"
        ],
        "language_code_repository_details": [
        {
            "language": "PYTHON39",
            "file_path_to_execute": "main.py",
            "default_file_path_to_submit_code": "solution.py",
            "code_repository": [
            {
                "file_name": "main.py",
                "file_type": "FILE",
                "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgdHJpcGxldF9jb3VudAoKZGVmIG1haW4oKToKICAgIHNlcXVlbmNlID0gaW5wdXQoKQogICAgcHJpbnQodHJpcGxldF9jb3VudChzZXF1ZW5jZSkpCiAgICAKaWYgX19uYW1lX18gPT0gJ19fbWFpbl9fJzoKICAgIG1haW4oKQ=="
            }
            ]
        },
        {
            "language": "JAVA",
            "file_path_to_execute": "Main.java",
            "default_file_path_to_submit_code": "Solution.java",
            "code_repository": [
            {
                "file_name": "Main.java",
                "file_type": "FILE",
                "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgU3RyaW5nIHNlcXVlbmNlID0gc2Nhbm5lci5uZXh0TGluZSgpOwogICAgICAgIAogICAgICAgIFNvbHV0aW9uIHNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKCk7CiAgICAgICAgaW50IHJlc3VsdCA9IHNvbHV0aW9uLnRyaXBsZXRfY291bnQoc2VxdWVuY2UpOwogICAgICAgIAogICAgICAgIFN5c3RlbS5vdXQucHJpbnQocmVzdWx0KTsKICAgICAgICAKICAgICAgICBzY2FubmVyLmNsb3NlKCk7CiAgICB9Cn0K"
            }
            ]
        },
        {
            "language": "CPP",
            "file_path_to_execute": "main.cpp",
            "default_file_path_to_submit_code": "solution.h",
            "code_repository": [
            {
                "file_name": "main.cpp",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgc3RyaW5nIHNlcXVlbmNlOwogICAgY2luPj5zZXF1ZW5jZTsKICAgIAogICAgaW50IHJlc3VsdCA9IHRyaXBsZXRfY291bnQoc2VxdWVuY2UpOwogICAgCiAgICBjb3V0PDxyZXN1bHQ8PGVuZGw7CiAgICByZXR1cm4gMDsKfQ=="
            }
            ]
        },
        {
            "language": "C",
            "file_path_to_execute": "main.c",
            "default_file_path_to_submit_code": "solution.c",
            "code_repository": [
            {
                "file_name": "main.c",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KI2lmbmRlZiBGSUxFMV9IDQojZGVmaW5lIEZJTEUxX0gNCmludCB0cmlwbGV0X2NvdW50KGNoYXJbXSk7DQojZW5kaWYNCg0KaW50IG1haW4oKXsNCiAgICBjaGFyIHNlcXVlbmNlWzEwMDBdOw0KICAgIHNjYW5mKCIlcyIsICZzZXF1ZW5jZSk7DQogICAgDQogICAgaW50IHJlc3VsdCA9IHRyaXBsZXRfY291bnQoc2VxdWVuY2UpOw0KICAgIHByaW50ZigiJWQiLCByZXN1bHQpOw0KICAgIHJldHVybiAwOw0KfQ=="
            }
            ]
        }
        ]
    },
    {
        "input_output": [
        {
            "input": [
            {
                "input": "475942583",
                "output": "29",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 51,
                "is_hidden": false
            },
            {
                "input": "3842258",
                "output": "8",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 52,
                "is_hidden": false
            },
            {
                "input": "357716777",
                "output": "44",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 53,
                "is_hidden": true
            },
            {
                "input": "897910022",
                "output": "26",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 54,
                "is_hidden": true
            },
            {
                "input": "818566715",
                "output": "19",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 55,
                "is_hidden": true
            },
            {
                "input": "509772970",
                "output": "44",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 56,
                "is_hidden": true
            },
            {
                "input": "493051146",
                "output": "19",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 57,
                "is_hidden": true
            },
            {
                "input": "195187914",
                "output": "33",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 58,
                "is_hidden": true
            },
            {
                "input": "274281780",
                "output": "15",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 59,
                "is_hidden": true
            },
            {
                "input": "359504056",
                "output": "27",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 60,
                "is_hidden": true
            }
            ]
        }
        ],
        "question_text": "###Discount on Bill\nAn online retail company plans to offer their customers a discount. The discount will be computed based on the invoice value of the order made. The discount amount is the sum of all the odd digits in the customer's total invoice value. If no odd digit is present in the invoice value, then the discount will be zero.\n\nImplement the function `calculate_discount` which will take `invoice_value` as argument and returns the discount on the `invoice_value`\n\n---\n\n####Input Format\nThe input consists of an integer, representing the customer's total invoice value.\n\n---\n\n####Output Format\nPrint an integer representing the discount for the given total invoice value.\n\n---\n\n####Example 1\n######Input\n    2514795\n######Output\n    27\n\n######Explanation\nOdd digits in the given number 2514795 are 5,1,7,9,5. \nThe sum of these odd digits is 27.\nSo, discount is `27`.\n\n####Example 2\n######Input\n    20\n######Output\n    0\n\n######Explanation\nThere is no odd digits in 20.\nSo, discount will be 0\n\n---\n\n####Constraints\n- 0 <`invoice_value`<= 10<sup>9</sup>\n\n---\n",
        "code_data": "",
        "short_text": "Discount on Bill",
        "question_type": "CODING",
        "question_key": 0,
        "skills": [],
        "question_format": "CODING_PRACTICE",
        "content_type": "MARKDOWN",
        "difficulty": "MEDIUM",
        "remarks": "",
        "scores_updated": true,
        "scores_computed": 10,
        "questions_asked_by_companies_info": [],
        "test_case_evaluation_metrics": [
        {
            "language": "C",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "CPP",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "PYTHON39",
            "time_limit_to_execute_in_seconds": 10.01
        }
        ],
        "code_repository_details": null,
        "solutions": [
        {
            "order": 1,
            "title": {
            "content": "Code",
            "content_type": "TEXT"
            },
            "description": {
            "content": "",
            "content_type": ""
            },
            "code_details": [
            {
                "code_content": "def calculate_discount(invoice_value):\n    discount = 0\n    \n    for num in str(invoice_value):\n        if num in '13579':\n            discount+=int(num)\n            \n    \n    return discount",
                "language": "PYTHON39",
                "default_code": true
            }
            ],
            "complexity_analysis": {
            "content": "",
            "content_type": ""
            }
        }
        ],
        "hints": [],
        "code_metadata": [
        {
            "is_editable": true,
            "language": "PYTHON39",
            "code_data": "def calculate_discount(invoice_value):\n    pass",
            "default_code": true
        },
        {
            "is_editable": true,
            "language": "JAVA",
            "code_data": "class Solution{\n    int calculate_discount(int invoice_value){\n        \n    }\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "CPP",
            "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint calculate_discount(int invoice_value){\n        \n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "C",
            "code_data": "#include<stdio.h>\r\n\r\nint calculate_discount(int invoice_value){\r\n\n}",
            "default_code": false
        }
        ],
        "cpp_python_time_factor": 0,
        "question_id": "3be76a8f-ee74-4fec-9110-5e719a05c891",
        "tag_names": [
        "POOL_1",
        "DIFFICULTY_MEDIUM",
        "IN_OFFLINE_EXAM",
        "TOPIC_PYTHON_CODING",
        "SOURCE_NI_ASSESMENT",
        "SUB_TOPIC_FUNCTIONS",
        "COMPANY_RECYKAL",
        "IS_PRIVATE",
        "3be76a8f-ee74-4fec-9110-5e719a05c891"
        ],
        "language_code_repository_details": [
        {
            "language": "PYTHON39",
            "file_path_to_execute": "main.py",
            "default_file_path_to_submit_code": "solution.py",
            "code_repository": [
            {
                "file_name": "main.py",
                "file_type": "FILE",
                "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgY2FsY3VsYXRlX2Rpc2NvdW50CgpkZWYgbWFpbigpOgogICAgaW52b2ljZV92YWx1ZSA9IGludChpbnB1dCgpKQogICAgcHJpbnQoY2FsY3VsYXRlX2Rpc2NvdW50KGludm9pY2VfdmFsdWUpKQogICAgCgppZiBfX25hbWVfXyA9PSAnX19tYWluX18nOgogICAgbWFpbigp"
            }
            ]
        },
        {
            "language": "JAVA",
            "file_path_to_execute": "Main.java",
            "default_file_path_to_submit_code": "Solution.java",
            "code_repository": [
            {
                "file_name": "Main.java",
                "file_type": "FILE",
                "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IGludm9pY2VfdmFsdWUgPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICAKICAgICAgICBTb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbigpOwogICAgICAgIGludCByZXN1bHQgPSBzb2x1dGlvbi5jYWxjdWxhdGVfZGlzY291bnQoaW52b2ljZV92YWx1ZSk7CiAgICAgICAgCiAgICAgICAgU3lzdGVtLm91dC5wcmludChyZXN1bHQpOwogICAgICAgIAogICAgICAgIHNjYW5uZXIuY2xvc2UoKTsKICAgIH0KfQo="
            }
            ]
        },
        {
            "language": "CPP",
            "file_path_to_execute": "main.cpp",
            "default_file_path_to_submit_code": "solution.h",
            "code_repository": [
            {
                "file_name": "main.cpp",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgaW50IGludm9pY2VfdmFsdWU7CiAgICBjaW4+Pmludm9pY2VfdmFsdWU7CiAgICAKICAgIGludCByZXN1bHQgPSBjYWxjdWxhdGVfZGlzY291bnQoaW52b2ljZV92YWx1ZSk7CiAgICAKICAgIGNvdXQ8PHJlc3VsdDw8ZW5kbDsKICAgIHJldHVybiAwOwp9"
            }
            ]
        },
        {
            "language": "C",
            "file_path_to_execute": "main.c",
            "default_file_path_to_submit_code": "solution.c",
            "code_repository": [
            {
                "file_name": "main.c",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50IGNhbGN1bGF0ZV9kaXNjb3VudChpbnQpOw0KI2VuZGlmDQoNCg0KaW50IG1haW4oKXsNCiAgICBpbnQgaW52b2ljZV92YWx1ZTsNCiAgICBzY2FuZigiJWQiLCAmaW52b2ljZV92YWx1ZSk7DQogICAgDQogICAgaW50IHJlc3VsdCA9IGNhbGN1bGF0ZV9kaXNjb3VudChpbnZvaWNlX3ZhbHVlKTsNCiAgICBwcmludGYoIiVkIiwgcmVzdWx0KTsNCiAgICByZXR1cm4gMDsNCn0="
            }
            ]
        }
        ]
    },
    {
        "input_output": [
        {
            "input": [
            {
                "input": "4 \n34 40 8 732",
                "output": "82",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 61,
                "is_hidden": false
            },
            {
                "input": "3 \n208 227 264",
                "output": "699",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 62,
                "is_hidden": false
            },
            {
                "input": "10 \n1 1 2 2 2 8 16 32 64 128",
                "output": "8",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 63,
                "is_hidden": true
            },
            {
                "input": "3 \n1 1 1",
                "output": "3",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 64,
                "is_hidden": true
            },
            {
                "input": "8 \n495 57 40 1 21 5 93 982",
                "output": "217",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 65,
                "is_hidden": true
            },
            {
                "input": "7 \n519 886 779 388 278 685 201",
                "output": "3736",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 66,
                "is_hidden": true
            },
            {
                "input": "3 \n32 237 237",
                "output": "506",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 67,
                "is_hidden": true
            },
            {
                "input": "4 \n1 352 314 608",
                "output": "1275",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 68,
                "is_hidden": true
            },
            {
                "input": "4 \n400 354 64 900",
                "output": "818",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 69,
                "is_hidden": true
            },
            {
                "input": "5 \n370 60 97 89 25",
                "output": "271",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 70,
                "is_hidden": true
            }
            ]
        }
        ],
        "question_text": "###Largest Perimeter\nFrom a list of side lengths `sides`, determine the polygon with the largest possible perimeter that can be constructed using these sides. \nThe polygon should be a closed figure composed of three or more sides, where the length of the longest side is less than the sum of the lengths of the other sides.\n\nImplement the function `largest_perimeter` which will take `sides   ` as argument and returns the largest perimeter.\n\n---\n\n####Input Format\n- The first line contains an integer `n`,  representing size of list\n- The second line consists of `n` space-separated integers.\n\n---\n\n####Output\n- The output consists of an integer representing the largest possible perimeter.\n\n---\n\n####Example 1\n######Input\n    3\n    1 2 2\n    \n######Output\n    5\n######Explanation\nLargest perimeter can be achived from polygon of side length 1, 2, 2 which will be 5.\n\n####Example 2\n######Input\n    5\n    1 2 5 2 1\n    \n######Output\n    11\n######Explanation\nLargest perimeter can be achived from polygon of side length 1, 2, 5, 2, 1 which will be 11.\n\n\n---\n\n####Constraints\n- 2 <=`n`<= 10<sup>5</sup>\n- 1 <=`sides[i]`<= 10<sup>9</sup>\n\n---\n",
        "code_data": "",
        "short_text": "Largest Perimeter",
        "question_type": "CODING",
        "question_key": 0,
        "skills": [],
        "question_format": "CODING_PRACTICE",
        "content_type": "MARKDOWN",
        "difficulty": "MEDIUM",
        "remarks": "",
        "scores_updated": true,
        "scores_computed": 10,
        "questions_asked_by_companies_info": [],
        "test_case_evaluation_metrics": [
        {
            "language": "C",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "CPP",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "PYTHON39",
            "time_limit_to_execute_in_seconds": 10.01
        }
        ],
        "code_repository_details": null,
        "solutions": [
        {
            "order": 1,
            "title": {
            "content": "Code",
            "content_type": "TEXT"
            },
            "description": {
            "content": "",
            "content_type": ""
            },
            "code_details": [
            {
                "code_content": "def largest_perimeter(n, sides):\n    sides.sort(reverse=True)\n    \n    total_side_sum = sum(sides)\n    \n    for i in range(n):\n        if sides[i] < total_side_sum-sides[i]:\n            return total_side_sum\n        else:\n            total_side_sum-=sides[i]\n            \n    return 0",
                "language": "PYTHON39",
                "default_code": true
            }
            ],
            "complexity_analysis": {
            "content": "",
            "content_type": ""
            }
        }
        ],
        "hints": [],
        "code_metadata": [
        {
            "is_editable": true,
            "language": "PYTHON39",
            "code_data": "def largest_perimeter(n, sides):\n    pass",
            "default_code": true
        },
        {
            "is_editable": true,
            "language": "JAVA",
            "code_data": "class Solution{\n    int largest_perimeter(int n, int[] sides){\n        \n    }\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "CPP",
            "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint largest_perimeter(int n, vector<int> sides){\n        \n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "C",
            "code_data": "#include<stdio.h>\n\nint largest_perimeter(int n, int sides[]){\n    \n}",
            "default_code": false
        }
        ],
        "cpp_python_time_factor": 0,
        "question_id": "8b3b0725-ba7e-450e-89c5-3166e22c85f6",
        "tag_names": [
        "POOL_1",
        "DIFFICULTY_MEDIUM",
        "IN_OFFLINE_EXAM",
        "TOPIC_PYTHON_CODING",
        "SOURCE_NI_ASSESMENT",
        "SUB_TOPIC_FUNCTIONS",
        "COMPANY_RECYKAL",
        "IS_PRIVATE",
        "8b3b0725-ba7e-450e-89c5-3166e22c85f6"
        ],
        "language_code_repository_details": [
        {
            "language": "PYTHON39",
            "file_path_to_execute": "main.py",
            "default_file_path_to_submit_code": "solution.py",
            "code_repository": [
            {
                "file_name": "main.py",
                "file_type": "FILE",
                "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgbGFyZ2VzdF9wZXJpbWV0ZXIKCgpkZWYgbWFpbigpOgoKICAgIG4gPSBpbnQoaW5wdXQoKSkKICAgIHNpZGVzID0gbGlzdChtYXAoaW50LCBpbnB1dCgpLnNwbGl0KCkpKQogICAgCiAgICBwcmludChsYXJnZXN0X3BlcmltZXRlcihuLCBzaWRlcykpCiAgICAKCgppZiBfX25hbWVfXyA9PSAnX19tYWluX18nOgogICAgbWFpbigp"
            }
            ]
        },
        {
            "language": "JAVA",
            "file_path_to_execute": "Main.java",
            "default_file_path_to_submit_code": "Solution.java",
            "code_repository": [
            {
                "file_name": "Main.java",
                "file_type": "FILE",
                "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IG4gPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICBpbnRbXSBudW1iZXJzID0gbmV3IGludFtuXTsKICAgICAgICAKICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IG47IGkrKykgewogICAgICAgICAgICBudW1iZXJzW2ldID0gc2Nhbm5lci5uZXh0SW50KCk7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIFNvbHV0aW9uIHNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKCk7CiAgICAgICAgaW50IHJlc3VsdCA9IHNvbHV0aW9uLmxhcmdlc3RfcGVyaW1ldGVyKG4sIG51bWJlcnMpOwogICAgICAgIAogICAgICAgIFN5c3RlbS5vdXQucHJpbnQocmVzdWx0KTsKICAgICAgICAKICAgICAgICBzY2FubmVyLmNsb3NlKCk7CiAgICB9Cn0K"
            }
            ]
        },
        {
            "language": "CPP",
            "file_path_to_execute": "main.cpp",
            "default_file_path_to_submit_code": "solution.h",
            "code_repository": [
            {
                "file_name": "main.cpp",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgaW50IG47CiAgICBjaW4+Pm47CiAgICAKICAgIHZlY3RvcjxpbnQ+IG51bWJlcnMobik7CiAgICAKICAgIGZvcihpbnQgaT0wO2k8bjtpKyspewogICAgICAgIGNpbj4+bnVtYmVyc1tpXTsKICAgIH0KICAgIAogICAgaW50IHJlc3VsdCA9IGxhcmdlc3RfcGVyaW1ldGVyKG4sIG51bWJlcnMpOwogICAgCiAgICBjb3V0PDxyZXN1bHQ8PGVuZGw7CiAgICByZXR1cm4gMDsKfQ=="
            }
            ]
        },
        {
            "language": "C",
            "file_path_to_execute": "main.c",
            "default_file_path_to_submit_code": "solution.c",
            "code_repository": [
            {
                "file_name": "main.c",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50IGxhcmdlc3RfcGVyaW1ldGVyKGludCwgaW50W10pOw0KI2VuZGlmDQoNCmludCBtYWluKCl7DQogICAgaW50IG47DQogICAgc2NhbmYoIiVkIiwgJm4pOw0KICAgIA0KICAgIGludCBudW1iZXJzWzEwMDFdOw0KICAgIA0KICAgIGZvcihpbnQgaT0wO2k8bjtpKyspew0KICAgICAgICBzY2FuZigiJWQiLCZudW1iZXJzW2ldKTsNCiAgICB9DQogICAgDQogICAgaW50IHJlc3VsdCA9IGxhcmdlc3RfcGVyaW1ldGVyKG4sIG51bWJlcnMpOw0KICAgIHByaW50ZigiJWQiLCByZXN1bHQpOw0KICAgIHJldHVybiAwOw0KfQ=="
            }
            ]
        }
        ]
    },
    {
        "input_output": [
        {
            "input": [
            {
                "input": "6 935 \n35 761 251 366 637 847",
                "output": "3",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 71,
                "is_hidden": false
            },
            {
                "input": "1 198 \n930",
                "output": "0",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 72,
                "is_hidden": false
            },
            {
                "input": "721 8706 \n183 368 951 1000 742 889 131 943 282 212 44 378 971 594 259 814 304 566 370 655 105 678 560 803 926 698 686 103 602 802 366 870 551 874 591 88 570 220 735 849 113 141 874 908 612 48 776 46 262 344 793 187 148 420 646 206 36 918 997 192 100 753 541 16 756 905 86 746 257 271 982 326 290 790 263 516 753 16 135 7 853 504 440 263 47 756 441 268 441 835 366 526 167 62 85 524 396 893 650 593 176 388 820 670 369 433 609 32 559 31 486 474 781 275 576 468 428 158 552 274 612 47 594 755 816 387 346 100 851 963 665 300 486 446 837 804 119 428 826 996 401 751 268 294 517 284 449 632 281 796 955 305 20 372 862 170 287 819 198 918 702 720 325 146 313 717 5 115 907 96 808 995 484 559 880 38 607 864 978 330 377 311 678 233 80 671 887 797 940 50 420 652 436 834 385 227 413 387 71 220 836 151 473 449 889 900 663 347 588 506 443 697 340 483 282 32 101 64 271 761 515 771 442 780 243 584 462 802 603 933 732 455 579 768 761 549 316 330 746 672 678 763 694 217 359 948 644 134 548 989 459 945 972 902 262 598 849 30 468 19 347 995 485 224 715 590 319 424 800 289 496 113 691 455 972 278 460 164 387 565 757 444 913 745 755 895 708 841 643 845 650 422 23 753 58 93 790 151 946 67 444 84 442 319 756 404 992 855 592 804 215 960 666 133 744 215 807 695 612 28 661 726 441 874 101 871 239 305 453 768 953 969 412 641 218 610 345 484 407 963 38 982 862 202 604 528 439 151 253 563 319 477 396 408 900 883 22 720 221 570 463 78 790 881 994 217 459 684 89 405 787 963 999 355 223 350 379 156 286 461 224 127 708 242 266 500 133 469 789 912 453 207 770 439 224 190 149 647 287 686 286 574 975 79 224 734 607 81 397 280 838 999 575 509 97 353 451 357 801 395 491 362 96 753 620 151 189 940 754 700 661 911 567 453 538 357 856 1000 26 846 114 609 407 273 604 867 366 592 67 940 698 997 892 359 815 875 315 878 971 48 55 103 162 793 637 653 960 704 13 160 289 240 238 800 824 19 770 846 329 776 676 123 137 844 755 62 665 96 241 216 341 303 118 863 738 953 620 990 993 8 991 290 162 788 217 15 518 634 371 297 48 546 767 61 574 627 888 885 600 99 193 675 664 39 109 801 929 758 845 320 945 925 925 875 520 62 781 286 289 407 832 858 71 786 434 889 959 5 118 904 460 27 136 291 224 109 916 946 830 186 794 541 791 460 60 850 504 329 413 908 728 204 968 465 597 983 5 276 777 394 908 955 317 693 393 349 689 901 508 174 470 6 190 220 725 905 597 797 106 411 688 130 507 861 398 747 540 304 535 859 678 125 575 723 478 729 885 586 396 899 283 536 273 144 611 658 881 661 108 105 25 509 969 871 432 620 712 274 762 677 682 375 309 991 597 531 282 808 67 696 61 511 207 591 301 304 771 71 9 714 317 412 940 200 277 240 537 949 163 502 411 467 240 554 913 20 474 187 197 472 539 754 452 655 30 848 954 524 170 4 970 467 753 636 836 579 444 175 772 113 119 782 802 463 86 926 403 821 92 334 471 423 990 654 828 347 168 587 432 732 344",
                "output": "112",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 73,
                "is_hidden": true
            },
            {
                "input": "595 7573 \n114 929 847 700 107 556 897 991 299 185 192 4 231 864 305 735 89 137 423 106 192 147 11 380 523 893 591 895 214 456 555 53 519 537 178 128 961 570 582 320 407 606 171 428 940 890 711 82 65 928 138 612 631 327 472 819 497 407 537 263 887 290 67 627 146 439 953 455 732 688 718 556 500 180 86 846 917 337 606 513 231 13 851 824 60 794 64 294 277 711 713 218 14 48 462 424 395 153 231 760 606 531 274 349 188 785 856 356 189 505 117 93 745 853 458 509 893 990 279 923 969 477 441 175 165 693 977 819 225 899 406 390 479 96 760 350 439 571 71 230 339 358 917 809 241 20 132 569 571 245 903 499 843 314 706 875 864 43 521 73 469 440 846 59 783 278 983 536 847 724 697 379 530 432 64 730 222 996 130 887 936 312 104 53 829 166 8 792 953 331 747 128 357 43 244 787 112 355 903 43 601 57 918 125 542 624 356 566 165 575 81 889 704 445 714 564 963 164 302 321 770 511 667 658 2 708 228 145 512 717 764 284 250 420 341 940 929 645 157 12 968 437 558 640 339 116 825 536 545 580 595 885 357 366 629 735 133 150 64 234 798 151 684 614 440 573 609 379 573 280 722 984 836 629 357 645 209 506 455 783 197 542 179 282 60 371 862 44 273 909 155 195 289 635 860 295 790 251 159 891 831 883 292 401 985 464 283 54 150 710 741 119 69 796 217 222 357 283 807 727 814 939 731 29 574 914 569 861 37 552 256 133 943 291 38 707 79 966 216 777 703 763 431 992 24 721 428 434 553 589 645 610 103 514 541 289 260 109 74 905 683 5 127 170 142 816 247 758 111 926 833 742 208 421 943 26 547 609 665 283 174 622 918 549 656 894 939 967 475 859 755 765 187 271 970 750 166 807 585 872 319 759 713 644 785 186 849 105 318 797 653 27 490 647 77 398 350 593 32 798 969 557 302 76 408 754 838 1000 964 32 982 415 958 198 877 647 169 275 14 37 42 686 191 187 618 746 721 785 737 757 895 207 765 993 956 405 261 654 249 42 584 115 820 420 914 417 109 856 778 166 490 348 619 281 466 284 502 909 508 728 405 783 875 598 937 141 193 559 394 381 170 579 161 206 46 811 520 846 469 915 40 504 513 712 103 820 279 886 640 662 644 540 223 218 790 90 163 843 584 227 349 144 958 657 532 578 275 561 555 645 2 679 964 329 479 225 840 443 972 476 818 505 675 883 34 80 446 856 972 664 536 930 24 717 92 950 795 551 667 526 832 133 954 853 38 33 347 267 395 299 955 323 422 747 872 905 63 964 598 770 244 637 90 95 310 650 342 616 644 846 362 520 969 562 884",
                "output": "98",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 74,
                "is_hidden": true
            },
            {
                "input": "876 4305 \n925 618 552 386 712 739 521 573 275 755 36 429 960 567 996 418 735 702 152 46 918 366 319 865 935 697 898 819 550 48 958 450 478 754 994 951 286 615 187 345 77 171 947 163 142 923 518 443 775 284 368 262 311 126 650 100 871 808 81 782 550 567 260 1 35 694 280 48 902 732 464 390 616 323 569 495 354 969 946 163 74 818 366 42 712 54 826 510 248 891 568 811 499 887 853 3 875 460 493 57 125 262 977 288 771 822 366 630 202 834 969 264 461 263 692 926 749 803 42 290 753 687 222 549 484 460 213 410 381 540 9 248 755 736 491 321 256 654 616 188 616 425 615 69 600 23 575 690 143 150 386 28 554 93 788 793 203 173 866 875 230 943 407 438 471 12 628 301 510 663 605 56 728 986 972 864 199 733 797 550 587 175 774 484 547 59 217 164 501 91 68 803 762 936 480 715 120 112 43 681 25 560 731 969 35 504 605 592 981 961 930 879 814 182 350 187 583 800 305 996 10 240 393 199 874 339 264 893 14 239 908 902 672 49 44 898 671 227 407 565 862 41 46 352 902 632 160 871 62 651 834 978 795 304 784 265 479 904 721 89 830 240 954 853 267 736 143 958 569 349 223 583 218 761 720 371 407 334 450 832 76 67 981 970 6 333 709 121 937 500 213 330 208 257 262 902 149 397 672 31 44 555 943 417 155 407 391 57 532 437 946 171 956 136 223 666 157 824 340 956 269 998 512 282 631 37 584 169 936 275 302 229 207 955 385 520 576 373 555 764 956 444 1 532 248 941 169 150 789 910 841 306 648 525 633 722 386 105 525 522 750 122 987 87 569 592 83 783 764 340 504 872 432 500 812 750 648 636 487 120 865 617 315 589 805 916 853 307 709 262 185 836 401 554 243 219 737 762 1 557 485 759 563 719 32 435 170 649 468 492 734 21 55 553 760 381 177 996 248 877 352 653 272 379 114 720 782 52 243 546 682 695 69 303 256 591 488 130 349 884 953 197 970 23 375 418 820 133 521 680 562 157 906 467 274 677 916 944 536 540 245 245 24 774 747 749 380 829 514 341 266 411 887 539 973 799 988 26 873 789 936 787 14 710 49 930 832 51 894 480 792 243 22 315 361 346 481 624 791 495 340 120 910 135 133 678 511 75 936 632 833 211 769 427 555 520 299 705 920 654 548 655 451 183 598 657 476 616 674 901 866 28 827 293 245 926 412 219 610 687 594 801 759 558 469 338 847 536 245 399 314 36 253 482 454 469 507 712 523 916 556 929 786 352 122 805 406 410 940 176 711 484 831 943 89 304 100 281 8 348 313 363 13 382 551 636 920 915 662 92 449 16 252 524 401 37 98 390 606 331 207 766 543 685 684 433 932 919 888 480 584 653 47 613 339 940 316 125 31 318 496 344 425 450 56 167 824 493 808 907 153 85 960 425 475 859 539 493 289 102 154 567 233 916 822 587 893 780 128 620 13 984 253 462 141 90 340 647 917 808 664 882 184 898 28 937 677 236 319 131 242 826 602 617 409 163 340 472 950 240 740 167 396 728 255 670 291 807 585 830 269 809 124 208 922 979 70 216 615 328 744 610 762 370 284 965 677 490 717 296 458 399 702 972 439 830 752 516 287 432 376 368 727 358 625 953 621 306 149 649 248 443 818 138 101 329 294 227 579 347 836 596 788 857 433 709 772 49 507 60 409 293 228 889 307 389 392 730 824 772 126 312 662 420 689 831 524 305 560 666 394 978 142 490 720 490 46 493 846 603 9 752 510 963 120 934 596 688 276 57 983 272 82 113 683 317 888 81 232 715 314 795 119 529 75 576 703 568 939 33 706 521 138 533 354 149 504 828 256 245 295 523 443 5 472 841 14 659 483 856 174 29 804 151 879 395 702 716 377 504 740 940 888 321 478 632 946 28 532 137 944 581 85 77 894 211 846 504 363 267 506 102 373 852 753 564 958 8 164 903 536 230 871 699 377 368",
                "output": "93",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 75,
                "is_hidden": true
            },
            {
                "input": "301 931 \n61 303 728 450 865 526 705 738 179 407 784 156 809 235 495 946 957 633 838 45 487 785 388 374 841 615 456 275 428 669 532 603 745 509 195 132 754 503 727 464 824 469 545 688 542 472 275 971 515 239 157 8 215 967 934 876 643 791 301 192 939 358 863 796 273 473 67 153 220 743 460 11 124 574 672 798 680 712 975 783 105 206 866 351 174 866 797 651 799 694 998 814 290 899 789 783 450 945 341 93 118 621 510 480 410 819 162 22 935 958 639 239 260 52 711 684 914 361 294 112 520 949 203 97 717 275 484 574 228 457 690 245 421 523 37 809 605 722 728 146 79 225 29 443 391 146 858 174 941 447 161 231 544 355 711 591 315 951 307 414 840 798 509 637 440 259 417 764 467 134 371 123 564 215 830 559 701 241 960 798 150 656 401 799 313 106 834 989 522 833 301 531 822 224 2 850 179 58 904 814 213 857 688 884 955 872 874 95 19 260 609 100 187 114 841 329 855 660 671 594 147 760 580 983 394 842 522 670 409 81 384 440 399 318 533 305 780 87 84 139 482 476 930 890 793 381 690 595 597 101 729 264 338 32 858 382 376 362 566 65 209 131 730 866 964 694 710 283 472 985 930 594 226 150 449 250 604 574 137 863 297 916 741 25 787 616 762 266 886 484 330 295 343 470 3 18 576 849 89 444 148",
                "output": "21",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 76,
                "is_hidden": true
            },
            {
                "input": "562 8797 \n9 620 63 464 758 604 69 389 429 650 328 313 918 273 123 553 207 508 530 688 105 257 773 67 717 931 834 149 469 985 807 700 647 832 187 318 337 96 770 631 610 819 292 110 429 58 350 14 779 125 397 142 259 436 408 280 944 290 475 814 766 244 197 878 209 100 327 817 908 944 991 596 84 183 411 851 251 71 441 516 146 963 28 449 34 514 822 30 934 869 111 543 669 11 926 125 650 862 423 941 837 814 738 982 418 801 508 913 153 415 415 545 671 703 724 707 373 398 595 16 389 566 999 895 360 1000 703 900 386 573 237 383 804 543 594 225 206 306 632 667 623 942 509 258 735 938 585 810 182 842 507 346 101 699 887 156 344 30 770 851 151 621 694 260 863 158 829 221 581 392 241 672 206 201 911 323 961 865 664 891 105 444 158 186 398 528 343 706 769 671 48 462 192 359 209 227 458 923 347 558 270 739 589 829 207 949 739 956 605 243 212 680 460 69 6 151 501 978 756 575 137 280 764 26 527 925 191 605 839 933 179 534 462 300 942 365 212 533 30 342 246 877 545 958 954 657 119 832 210 581 900 447 552 438 564 277 409 270 817 782 271 776 300 329 117 955 231 204 700 517 682 621 181 821 119 876 991 441 42 152 239 560 820 671 205 575 573 530 953 741 299 369 24 209 20 454 22 922 53 762 474 223 112 49 798 872 57 390 651 997 312 329 174 143 655 465 96 595 392 87 863 852 834 997 539 622 354 112 964 462 587 171 986 656 466 105 881 495 464 247 694 211 54 925 984 252 665 440 711 895 192 216 91 186 418 462 502 723 858 943 294 142 86 619 606 400 403 600 16 624 419 886 612 411 74 849 814 434 340 460 992 802 94 817 529 387 379 723 222 333 693 236 270 957 973 839 640 994 294 680 255 7 210 694 48 595 493 57 588 838 205 584 189 103 237 382 492 173 339 423 384 189 810 65 519 313 758 607 204 548 198 759 442 408 859 171 110 625 641 761 998 357 222 445 2 366 619 141 623 702 887 812 911 882 130 972 919 398 180 711 582 667 529 657 840 906 930 903 791 284 760 974 641 965 761 495 178 618 649 384 604 421 842 654 672 816 595 248 256 255 601 263 927 919 734 922 667 215 878 268 51 611 80 926 756 744 384 27 440 121 504 937 516 180 634 449 910 978 218 747 991 219 583 98 135 2 244 158 860 275 231 900 208 150 239 601 411 943 16 122 620 938 350 923 311 61 270 123 996 3 261 378 899 512 920 916 663 498 539 913 340 133",
                "output": "95",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 77,
                "is_hidden": true
            },
            {
                "input": "854 6974 \n71 182 357 122 982 616 728 489 885 672 50 100 965 475 164 727 176 125 977 809 694 8 30 690 305 427 8 844 102 293 516 352 53 654 285 561 695 863 632 416 597 233 275 546 740 53 832 300 91 575 794 764 931 514 937 694 808 766 426 863 461 650 764 168 691 312 217 937 442 603 661 530 940 873 962 303 405 421 133 612 684 134 366 79 160 974 736 811 605 755 436 289 241 937 261 5 14 471 438 660 579 893 739 77 949 849 753 346 301 912 903 182 930 467 108 627 385 269 617 448 390 278 658 682 193 848 750 948 173 357 411 577 129 651 122 198 912 368 934 812 432 402 423 512 263 476 16 830 930 917 643 31 404 84 413 895 606 950 842 220 126 401 83 768 341 274 544 957 394 396 730 641 372 128 321 776 243 390 635 101 759 911 535 174 219 332 534 84 958 563 82 343 538 721 384 486 969 325 23 690 604 354 367 33 385 18 389 44 487 408 524 548 146 476 895 197 633 74 970 508 1 393 137 788 825 586 416 600 873 884 891 485 843 695 632 213 390 2 8 999 313 1 946 459 988 529 502 78 103 803 817 229 757 330 295 127 990 332 35 938 3 631 354 487 131 574 904 989 250 988 920 718 829 657 519 714 933 419 724 750 161 131 417 60 110 483 988 672 110 35 237 439 622 609 459 155 447 915 331 844 221 893 324 721 937 586 130 148 464 367 521 718 925 661 170 130 90 691 936 196 290 143 388 42 407 999 631 91 282 341 665 141 143 398 961 234 529 506 387 727 464 765 883 822 857 486 881 73 808 987 554 510 330 470 60 842 875 691 779 112 788 80 504 698 11 796 945 991 160 9 777 406 411 379 998 705 99 82 767 739 797 66 295 683 299 42 324 668 59 578 667 937 179 45 226 838 56 583 279 509 143 349 892 545 599 226 205 613 211 586 633 749 945 93 367 136 470 632 958 970 587 797 813 130 932 754 249 99 733 757 173 826 913 361 743 572 403 289 235 46 114 618 49 317 565 889 926 974 124 808 525 319 882 665 513 39 711 359 553 463 206 531 248 583 98 420 900 644 181 750 15 566 502 206 590 728 805 427 915 989 647 673 977 57 889 939 568 303 703 33 684 216 536 65 739 13 588 273 144 355 959 84 485 570 666 286 495 713 730 908 825 487 692 196 300 668 7 465 136 164 682 193 305 205 282 930 341 620 518 965 409 250 265 945 454 633 623 383 637 139 432 490 9 200 737 101 489 698 6 406 914 935 861 950 791 264 902 68 134 387 102 266 124 406 837 818 435 852 349 408 525 40 929 558 7 721 771 800 267 479 637 103 489 174 349 554 813 342 184 537 457 766 790 278 621 309 262 340 741 100 310 380 460 142 197 74 90 334 576 893 885 764 689 953 179 821 133 256 471 221 100 482 52 147 118 433 930 583 741 520 230 403 308 318 268 153 102 987 422 174 487 17 595 914 794 413 631 73 715 448 290 856 168 857 422 984 665 156 400 342 992 994 340 829 182 934 772 866 244 598 24 416 353 754 581 292 584 902 187 954 599 262 850 156 940 923 879 156 636 179 677 855 118 64 651 424 423 521 752 716 518 677 175 256 963 300 989 801 710 103 305 948 897 130 170 432 378 741 196 29 179 132 841 936 215 839 528 591 800 169 268 563 991 790 682 982 331 643 502 296 121 832 57 146 495 348 842 508 424 872 799 501 409 332 120 283 198 457 154 709 624 280 632 74 656 421 362 219 300 554 241 61 59 272 603 575 6 960 310 121 159 223 134 991 702 475 178 625 465 164 711 587 497 720 118 577 414 686 664 756 603 841 89 906 297 851 788 47 970 663 830 967 918 421 543 462 518 553 130 38 936 891 290 362 141 707 394 301 810 226 642 581 276 453 147 312 945 45 456 478 779 877 290 490 861 197 34 3 267 40 639 820 300 291",
                "output": "111",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 78,
                "is_hidden": true
            },
            {
                "input": "37 3599 \n299 298 790 477 549 669 380 83 427 436 855 95 802 83 427 870 588 99 38 332 508 387 464 46 31 271 149 350 820 234 427 350 507 854 392 340 275",
                "output": "17",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 79,
                "is_hidden": true
            },
            {
                "input": "901 768 \n783 517 468 764 599 993 652 973 926 861 382 394 238 86 908 339 555 789 748 484 938 668 19 874 474 454 478 50 666 352 772 718 105 233 461 554 804 311 417 503 588 353 217 542 18 930 702 347 368 533 990 313 263 293 968 236 147 661 118 155 80 681 416 42 569 25 482 993 309 427 399 645 172 570 897 720 220 1 625 724 816 891 872 29 545 138 22 983 759 129 729 808 912 704 346 963 410 161 699 657 454 999 931 527 449 109 439 687 903 905 787 706 966 874 339 997 966 571 652 991 346 641 380 948 548 152 796 882 20 735 229 788 985 295 223 448 639 623 901 46 870 735 126 255 986 521 436 618 721 148 134 909 366 172 77 144 194 299 874 393 993 185 654 969 384 814 825 908 254 641 148 291 893 851 571 217 129 569 481 861 672 376 366 154 703 754 642 621 213 24 937 418 523 581 664 414 262 736 877 966 748 395 569 103 539 24 788 547 929 994 21 311 365 461 437 660 244 312 919 131 675 530 548 342 793 305 545 316 364 139 180 765 313 980 153 532 829 78 390 352 180 97 437 424 146 85 56 160 295 558 605 698 36 293 571 34 40 206 827 520 442 100 136 614 36 405 286 5 370 128 605 516 993 271 122 850 539 667 760 237 227 344 534 924 1 799 521 536 757 265 932 402 640 427 1000 591 144 517 631 993 921 640 735 502 684 81 988 438 894 766 355 701 326 85 662 147 836 406 769 901 705 455 414 921 19 736 843 130 371 49 29 386 152 783 935 367 325 91 848 971 460 811 593 656 181 493 5 323 407 370 260 981 205 222 460 133 739 918 463 991 238 3 890 948 941 750 316 425 87 862 428 508 860 699 484 351 537 797 640 478 641 84 46 468 176 510 524 849 6 830 524 341 863 902 21 392 107 169 183 872 745 651 502 891 577 537 982 259 798 744 272 768 907 5 323 223 90 464 899 934 734 502 685 103 717 729 486 10 396 550 235 837 730 173 236 851 165 73 793 222 838 258 375 609 507 151 118 942 416 467 939 856 599 819 916 948 448 27 481 220 961 981 74 683 150 885 844 523 150 274 667 764 782 236 62 822 375 647 605 71 761 71 996 269 674 962 651 999 714 489 357 328 139 42 187 412 272 368 409 802 617 721 845 822 868 243 262 214 259 647 781 985 521 541 142 332 775 77 302 730 911 499 623 424 594 986 222 417 981 933 897 438 924 721 311 288 279 817 934 688 303 589 380 428 620 194 869 525 956 851 804 115 326 873 12 818 408 826 357 79 902 215 939 164 603 233 643 250 218 133 703 945 234 854 779 574 932 901 35 590 941 233 535 43 401 485 594 612 363 731 679 9 773 820 908 569 621 968 833 669 49 97 725 97 533 958 574 94 352 122 114 213 224 883 976 564 394 423 653 642 642 334 523 746 665 720 849 965 637 610 599 425 35 430 906 10 786 390 524 629 524 230 442 108 876 219 559 854 777 636 804 998 601 904 49 939 116 71 329 54 512 879 245 319 528 484 515 334 1000 451 879 799 120 364 650 143 890 82 424 85 427 17 638 757 752 746 292 86 776 43 703 2 363 931 192 855 603 227 413 163 221 307 16 389 12 45 310 673 813 41 407 859 757 86 942 623 217 366 514 193 107 649 612 87 461 627 960 467 630 803 785 990 621 750 623 657 991 416 92 128 365 636 761 633 35 812 103 687 376 114 421 910 758 838 882 21 640 919 357 783 860 457 429 375 554 148 215 984 535 600 280 821 769 687 396 37 949 989 647 117 619 495 885 617 711 458 34 596 906 645 12 947 418 665 704 469 997 813 976 660 15 119 434 134 736 715 717 769 289 517 209 479 122 168 31 410 575 517 755 242 513 337 424 48 425 721 931 669 988 872 6 453 405 844 567 664 633 331 180 941 364 121 711 181 313 459 654 530 812 16 418 150 561 674 257 264 953 538 542 409 422 870 622 888 493 318 6 573 833 707 373 315 144 682 319 971 896 886 430 970 670 714 507 771 476 545 345 19 927 593 474 359 998 753 820 56 833 107 586 469 333",
                "output": "42",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 80,
                "is_hidden": true
            }
            ]
        }
        ],
        "question_text": "###Reeta's Shoping\r\nReeta wants to maximize her shopping within a limited budget without spending time on comparing products individually. \r\nShe has a list of all items in the store with price. She wants your help to find maximum number of product she can buy within her budget.\r\n\r\nImplement the function `max_items_count` which take number of items `n`,  `price_list` and `budget` as arguments and returns maximum number of items Reeta can buy. \r\n\r\n---\r\n\r\n####Input Format\r\n- The first line of input contains two integers `n` and `budget`, where `n` is number of items in store.\r\n- The second line contains `n` space-separated integers that represent the prices of the products.\r\n\r\n---\r\n\r\n####Output Format\r\n- The output consists of an integer representing the maximum number of items that Reeta can buy.\r\n\r\n---\r\n\r\n####Example\r\n######Input\r\n    5 5\r\n    3 1 2 1 1\r\n\r\n######Output\r\n    4\r\n\r\n######Explanation\r\nWith the budget of 5 Reeta can buy items with price [1,2,1,1].\r\nSo she can buy 4 items with her budget.\r\n\r\n---\r\n\r\n####Constraints\r\n- 1 <=`n`<= 10<sup>5</sup><br>\r\n- 1 <=`budget`<= 10<sup>7</sup>\r\n- 1 <=`price_list[i]`<=1000\r\n\r\n---\r\n",
        "code_data": "",
        "short_text": "Reeta's Shoping",
        "question_type": "CODING",
        "question_key": 0,
        "skills": [],
        "question_format": "CODING_PRACTICE",
        "content_type": "MARKDOWN",
        "difficulty": "HARD",
        "remarks": "",
        "scores_updated": true,
        "scores_computed": 10,
        "questions_asked_by_companies_info": [],
        "test_case_evaluation_metrics": [
        {
            "language": "C",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "CPP",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "PYTHON39",
            "time_limit_to_execute_in_seconds": 10.01
        }
        ],
        "code_repository_details": null,
        "solutions": [
        {
            "order": 1,
            "title": {
            "content": "Code",
            "content_type": "TEXT"
            },
            "description": {
            "content": "",
            "content_type": ""
            },
            "code_details": [
            {
                "code_content": "def max_items_count(n, budget, prices):\n    prices.sort()\n    \n    cost = 0\n    \n    for i in range(n):\n        cost += prices[i]\n        if cost>budget:\n            return i\n    \n    return n",
                "language": "PYTHON39",
                "default_code": true
            }
            ],
            "complexity_analysis": {
            "content": "",
            "content_type": ""
            }
        }
        ],
        "hints": [],
        "code_metadata": [
        {
            "is_editable": true,
            "language": "PYTHON39",
            "code_data": "def max_items_count(n, budget, prices):\n    pass",
            "default_code": true
        },
        {
            "is_editable": true,
            "language": "JAVA",
            "code_data": "class Solution{\n    int max_items_count(int n, int budget, int[] prices){\n        \n    }\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "CPP",
            "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nint max_items_count(int n, int budget, vector<int> prices){\n        \n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "C",
            "code_data": "#include<stdio.h>\r\n\r\nint max_items_count(int n, int budget, int prices[]){\r\n    \r\n}",
            "default_code": false
        }
        ],
        "cpp_python_time_factor": 0,
        "question_id": "36a896a6-84d4-4cdd-a45d-439e6bed2278",
        "tag_names": [
        "POOL_1",
        "DIFFICULTY_HARD",
        "IN_OFFLINE_EXAM",
        "TOPIC_PYTHON_CODING",
        "SOURCE_NI_ASSESMENT",
        "SUB_TOPIC_FUNCTIONS",
        "COMPANY_RECYKAL",
        "IS_PRIVATE",
        "36a896a6-84d4-4cdd-a45d-439e6bed2278"
        ],
        "language_code_repository_details": [
        {
            "language": "PYTHON39",
            "file_path_to_execute": "main.py",
            "default_file_path_to_submit_code": "solution.py",
            "code_repository": [
            {
                "file_name": "main.py",
                "file_type": "FILE",
                "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgbWF4X2l0ZW1zX2NvdW50CgoKZGVmIG1haW4oKToKCiAgICBuLGJ1ZGdldCA9IG1hcChpbnQsIGlucHV0KCkuc3BsaXQoKSkKICAgIHByaWNlcyA9IGxpc3QobWFwKGludCwgaW5wdXQoKS5zcGxpdCgpKSkKICAgIAogICAgcHJpbnQobWF4X2l0ZW1zX2NvdW50KG4sIGJ1ZGdldCwgcHJpY2VzKSkKICAgIAoKaWYgX19uYW1lX18gPT0gJ19fbWFpbl9fJzoKICAgIGhlbHBlcigp"
            }
            ]
        },
        {
            "language": "JAVA",
            "file_path_to_execute": "Main.java",
            "default_file_path_to_submit_code": "Solution.java",
            "code_repository": [
            {
                "file_name": "Main.java",
                "file_type": "FILE",
                "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IG4gPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICBpbnQgYnVkZ2V0ID0gc2Nhbm5lci5uZXh0SW50KCk7CiAgICAgICAgaW50W10gbnVtYmVycyA9IG5ldyBpbnRbbl07CiAgICAgICAgCiAgICAgICAgZm9yIChpbnQgaSA9IDA7IGkgPCBuOyBpKyspIHsKICAgICAgICAgICAgbnVtYmVyc1tpXSA9IHNjYW5uZXIubmV4dEludCgpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICBTb2x1dGlvbiBzb2x1dGlvbiA9IG5ldyBTb2x1dGlvbigpOwogICAgICAgIGludCByZXN1bHQgPSBzb2x1dGlvbi5tYXhfaXRlbXNfY291bnQobiwgYnVkZ2V0LCBudW1iZXJzKTsKICAgICAgICAKICAgICAgICBTeXN0ZW0ub3V0LnByaW50KHJlc3VsdCk7CiAgICAgICAgCiAgICAgICAgc2Nhbm5lci5jbG9zZSgpOwogICAgfQp9Cg=="
            }
            ]
        },
        {
            "language": "CPP",
            "file_path_to_execute": "main.cpp",
            "default_file_path_to_submit_code": "solution.h",
            "code_repository": [
            {
                "file_name": "main.cpp",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgaW50IG4sIGJ1ZGdldDsKICAgIGNpbj4+bj4+YnVkZ2V0OwogICAgCiAgICB2ZWN0b3I8aW50PiBudW1iZXJzKG4pOwogICAgCiAgICBmb3IoaW50IGk9MDtpPG47aSsrKXsKICAgICAgICBjaW4+Pm51bWJlcnNbaV07CiAgICB9CiAgICAKICAgIG4gPSBtYXhfaXRlbXNfY291bnQobiwgYnVkZ2V0LCBudW1iZXJzKTsKICAgIAogICAgY291dDw8bjw8ZW5kbDsKICAgIHJldHVybiAwOwp9"
            }
            ]
        },
        {
            "language": "C",
            "file_path_to_execute": "main.c",
            "default_file_path_to_submit_code": "solution.c",
            "code_repository": [
            {
                "file_name": "main.c",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50IG1heF9pdGVtc19jb3VudChpbnQsIGludCwgaW50W10pOw0KI2VuZGlmDQoNCmludCBtYWluKCl7DQogICAgaW50IG47DQogICAgc2NhbmYoIiVkIiwgJm4pOw0KICAgIGludCBidWRnZXQ7DQogICAgc2NhbmYoIiVkIiwgJmJ1ZGdldCk7DQogICAgDQogICAgaW50IG51bWJlcnNbMTAwMV07DQogICAgDQogICAgZm9yKGludCBpPTA7aTxuO2krKyl7DQogICAgICAgIHNjYW5mKCIlZCIsJm51bWJlcnNbaV0pOw0KICAgIH0NCiAgICANCiAgICBuID0gbWF4X2l0ZW1zX2NvdW50KG4sIGJ1ZGdldCwgbnVtYmVycyk7DQogICAgDQogICAgcHJpbnRmKCIlZCAiLCBuKTsNCiAgIA0KICAgIHJldHVybiAwOw0KfQ0K"
            }
            ]
        }
        ]
    },
    {
        "input_output": [
        {
            "input": [
            {
                "input": "9 \n171 435 129 293 741 768 616 657 174",
                "output": "129 129 -1 174 616 616 174 174 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 81,
                "is_hidden": false
            },
            {
                "input": "3 \n923 210 133",
                "output": "210 133 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 82,
                "is_hidden": false
            },
            {
                "input": "800 \n816 311 905 175 298 925 63 124 734 627 164 798 622 367 22 64 621 349 208 672 486 130 388 115 956 830 464 426 364 465 326 598 682 278 764 361 694 26 482 469 454 568 809 530 762 35 289 121 519 843 432 456 297 149 249 539 211 969 384 317 253 282 535 66 236 110 833 577 881 269 384 279 512 196 364 318 598 936 657 469 665 313 375 879 200 705 738 738 606 308 493 514 138 543 160 295 933 288 763 451 817 572 266 723 469 536 751 32 464 873 939 768 687 758 635 375 629 60 60 37 861 326 20 586 666 281 759 383 577 162 135 887 586 298 714 633 520 185 703 892 736 514 181 776 906 71 932 756 46 662 437 807 518 235 119 562 316 115 802 913 598 441 274 873 700 407 296 516 416 182 191 849 195 657 366 810 43 824 600 565 590 166 181 730 283 58 987 351 710 560 997 211 763 422 669 126 474 563 228 527 17 274 369 666 122 745 211 145 171 924 866 350 542 830 946 589 29 796 788 663 63 665 927 792 316 929 951 935 158 269 206 147 721 135 73 550 146 472 811 538 988 123 615 948 800 972 426 861 244 992 195 131 68 580 715 90 59 819 46 626 800 517 996 199 231 973 913 19 351 294 171 954 737 373 104 988 629 643 908 569 799 419 3 456 951 418 611 103 787 91 507 273 691 394 562 389 774 164 800 877 303 95 0 661 76 783 907 757 539 927 323 237 86 37 603 192 845 138 601 108 107 705 661 896 866 346 50 5 295 358 677 180 291 789 274 646 888 323 871 535 63 15 793 999 27 568 961 319 329 620 834 409 479 181 865 945 540 693 607 256 857 911 184 812 298 654 195 696 33 805 92 119 697 801 710 55 118 805 837 778 734 618 388 953 573 833 538 319 644 14 201 191 414 635 299 742 217 572 895 32 200 208 695 340 463 994 885 955 573 323 690 45 819 839 480 76 874 470 231 323 199 771 185 147 106 103 737 563 754 861 476 412 578 218 818 668 528 270 647 503 506 188 412 779 963 559 446 947 133 742 958 262 879 64 930 686 381 569 857 248 369 995 945 594 70 328 288 733 875 424 724 549 898 110 294 501 835 209 460 304 133 88 193 969 98 918 669 96 600 384 67 952 824 449 124 892 880 442 652 35 436 55 901 18 565 878 280 965 561 721 329 548 526 407 683 54 568 409 408 848 194 431 854 765 562 604 208 88 173 537 985 875 833 480 449 650 925 634 853 625 477 600 104 699 797 588 321 6 730 10 168 24 759 618 909 350 719 182 567 585 256 736 697 766 465 538 13 364 913 411 336 659 401 919 644 793 498 401 228 843 736 342 935 373 54 984 625 123 868 3 66 652 544 821 983 440 595 821 16 250 903 878 580 749 482 689 486 235 446 703 642 22 991 110 552 40 479 285 268 402 859 542 176 123 259 219 756 191 597 194 969 255 945 251 899 485 968 809 667 483 314 970 727 433 190 794 974 37 935 615 924 26 403 717 849 200 98 558 273 104 338 586 286 693 927 735 302 470 752 125 646 554 743 657 534 236 375 561 341 836 82 22 380 765 190 971 252 552 794 676 92 589 764 272 742 405 796 987 869 362 195 529 441 15 106 661 604 976 756 926 675 71 104 156 519 187 791 738 863 144 682 973 337 280 474 409 667 303 448 641 740 898 191 655 109 459 956 74 403 375 683 924 945 940 278 468 723 563 769 843 700 398 886 101 741 749 121 470 286 257 645 522 661 32 377 15 616 687 910 232 493 515 655 190 594 618 728 234 934 740 395 467 335 768 219 976 401 676 924 967 94 581 873 563 481 582 629 438 7 357",
                "output": "311 175 175 63 63 63 22 22 627 164 22 622 367 22 20 26 349 208 130 486 130 115 115 26 830 464 426 364 326 326 278 278 278 26 361 26 26 20 469 454 35 530 530 35 35 32 121 66 432 432 297 297 149 66 211 211 66 384 317 253 66 66 66 32 110 32 577 269 269 196 279 196 196 138 318 313 469 657 469 313 313 200 200 200 138 606 606 606 308 138 138 138 32 160 32 288 288 266 451 266 572 266 32 469 32 32 32 20 375 768 768 687 635 635 375 60 60 37 37 20 326 20 17 281 281 162 383 162 162 135 71 586 298 185 633 520 185 181 514 736 514 181 71 71 71 46 756 46 43 437 235 518 235 119 115 316 115 43 598 598 441 274 182 700 407 296 182 416 182 43 43 195 43 366 43 43 17 600 565 166 166 58 58 283 58 17 351 211 560 211 211 126 422 126 126 17 228 228 17 17 3 122 122 122 29 211 145 29 29 866 350 29 29 589 589 29 19 788 663 63 59 316 792 316 158 158 935 158 147 206 147 135 135 73 68 146 123 123 538 123 123 68 426 800 426 426 244 244 195 195 131 68 59 90 90 59 46 46 19 517 517 199 199 19 19 913 19 3 294 171 104 737 373 104 3 629 569 569 569 419 419 3 0 418 418 103 103 91 91 0 273 164 394 389 389 164 164 95 303 303 95 0 -1 76 37 757 757 539 323 323 237 86 37 5 192 138 138 108 108 107 50 661 346 866 346 50 5 3 180 180 180 63 274 274 63 323 323 63 535 63 15 14 27 27 14 319 319 181 181 409 409 181 181 33 540 540 256 607 256 184 184 184 33 298 195 195 33 33 14 92 55 55 55 710 55 14 14 778 778 734 618 388 319 573 538 538 319 14 14 6 191 32 299 299 217 217 32 32 32 18 45 45 340 323 323 885 573 573 323 45 45 35 480 480 76 64 470 231 199 199 185 185 147 106 103 64 563 476 476 476 412 218 218 188 668 528 270 188 503 188 188 133 133 559 559 446 133 133 64 262 262 64 64 35 686 381 248 248 248 70 70 945 594 70 67 288 110 424 424 110 549 110 110 88 209 209 209 133 304 133 88 67 98 98 96 669 96 67 384 67 35 824 449 124 35 880 442 35 35 18 55 18 18 6 280 280 54 561 329 329 54 526 407 54 54 6 409 408 194 194 88 208 765 562 208 208 88 6 104 480 875 833 480 449 104 634 634 625 625 477 104 104 6 588 588 321 6 3 10 3 24 13 618 350 350 182 182 13 256 256 13 697 465 465 13 13 3 336 411 336 228 401 228 644 498 498 401 228 54 736 342 54 373 54 3 625 123 3 3 -1 16 544 440 440 440 16 16 16 15 235 878 580 482 482 235 486 235 22 22 642 22 15 110 40 40 37 285 268 176 176 542 176 123 37 219 191 191 190 194 190 255 251 251 190 485 483 809 667 483 314 190 727 433 190 37 37 37 26 615 26 26 22 200 200 200 98 82 273 104 82 286 286 125 302 735 302 125 125 125 82 554 534 657 534 236 82 341 341 82 82 22 15 190 190 92 252 92 92 676 92 15 272 272 195 405 362 362 869 362 195 15 441 15 7 71 604 71 756 675 675 71 32 74 144 187 144 738 144 144 109 337 337 280 191 409 303 303 191 191 191 191 191 109 109 74 74 74 32 375 278 278 278 940 278 101 398 563 398 700 700 398 101 101 32 121 121 32 286 257 32 522 32 32 15 15 7 232 232 232 190 190 190 190 94 234 234 234 219 740 395 335 335 219 219 94 401 94 94 94 94 7 563 563 481 438 438 438 7 -1 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 83,
                "is_hidden": true
            },
            {
                "input": "63 \n337 370 410 459 889 709 937 715 746 771 611 349 357 25 721 834 445 800 321 459 36 591 697 529 144 519 297 242 610 579 52 917 289 717 882 83 900 781 594 235 987 944 17 314 544 838 635 147 836 63 698 421 226 172 783 84 348 9 279 835 159 83 11",
                "output": "25 349 349 349 709 611 715 611 611 611 349 25 25 17 445 445 321 321 36 36 17 529 529 144 52 297 242 52 579 52 17 289 83 83 83 17 781 594 235 17 944 17 9 147 147 635 147 63 63 9 421 226 172 84 84 9 9 -1 159 159 83 11 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 84,
                "is_hidden": true
            },
            {
                "input": "89 \n747 357 58 34 366 813 478 22 884 360 155 996 147 682 964 718 522 756 762 520 387 935 905 441 118 204 615 129 570 498 101 838 82 266 376 472 7 586 881 159 362 251 758 598 43 912 771 369 500 723 256 455 989 525 8 389 79 711 755 325 834 872 309 644 894 170 287 556 378 465 780 100 880 341 333 736 851 392 225 582 579 758 763 350 344 289 861 171 711",
                "output": "357 58 34 22 22 478 22 7 360 155 147 147 118 522 718 522 520 520 520 387 118 905 441 118 101 129 129 101 498 101 82 82 7 7 7 7 -1 159 159 43 251 43 598 43 8 771 369 256 256 256 8 8 525 8 -1 79 -1 325 325 309 309 309 170 170 170 100 100 378 100 100 100 -1 341 333 225 392 392 225 171 579 350 350 350 344 289 171 171 -1 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 85,
                "is_hidden": true
            },
            {
                "input": "48 \n299 609 617 393 768 247 213 508 851 816 758 534 294 349 418 538 168 796 569 824 648 765 970 417 365 463 294 285 907 520 88 822 672 793 214 281 807 675 159 236 651 401 934 52 138 309 201 503",
                "output": "247 393 393 247 247 213 168 294 816 758 534 294 168 168 168 168 88 569 417 648 417 417 417 365 294 294 285 88 520 88 52 672 214 214 159 159 675 159 52 52 401 52 52 -1 -1 201 -1 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 86,
                "is_hidden": true
            },
            {
                "input": "693 \n826 976 685 188 450 876 102 242 649 453 48 193 121 483 826 962 951 415 405 393 947 972 465 102 961 617 752 602 44 404 668 303 444 687 695 110 916 855 24 200 803 793 351 970 151 123 789 388 985 513 41 529 929 67 971 957 567 849 484 449 792 542 453 16 579 985 995 824 926 484 665 46 736 245 295 914 946 245 847 88 591 634 703 957 827 708 401 817 804 446 660 885 732 609 53 838 507 556 782 168 793 15 218 906 127 857 268 734 96 872 865 653 52 243 312 298 157 839 788 266 797 865 528 61 682 245 752 960 842 79 975 730 901 83 415 38 786 426 885 810 64 447 143 236 194 663 693 54 499 82 137 834 61 289 872 139 410 749 951 454 754 642 648 92 818 885 290 879 366 364 900 859 136 768 294 284 346 60 946 635 162 196 907 399 730 464 666 445 832 177 471 666 567 508 195 346 179 378 681 724 337 233 507 947 544 765 536 767 851 796 430 320 165 142 925 324 334 265 907 568 849 786 430 97 61 554 616 718 581 136 951 664 956 878 245 417 537 277 985 2 16 395 472 411 950 659 787 951 848 502 8 883 171 264 422 554 35 695 781 638 549 709 340 158 910 428 875 891 990 700 496 427 240 679 682 92 469 508 43 132 368 678 820 379 553 318 140 776 420 964 879 271 839 587 702 715 816 334 96 117 76 152 739 565 244 214 775 483 622 539 380 423 116 205 754 897 788 286 44 894 211 807 570 492 322 215 381 671 550 930 181 360 92 960 399 208 462 711 565 729 130 466 371 825 22 983 453 864 130 626 385 341 91 975 780 725 624 35 171 966 920 37 534 674 534 730 47 236 888 33 928 15 488 92 116 164 28 382 404 796 900 463 117 602 716 670 845 371 525 692 835 204 161 373 211 63 309 170 578 697 40 950 195 784 661 672 495 675 58 54 943 670 269 6 949 254 130 749 71 269 323 674 134 348 772 441 697 972 139 582 435 690 497 137 766 930 712 188 346 880 322 395 102 616 935 423 859 237 682 73 507 406 323 601 82 53 253 521 17 935 88 245 763 137 969 323 512 344 935 77 967 611 825 537 361 632 736 354 290 371 320 984 766 748 558 617 347 213 740 59 901 997 634 851 994 212 238 820 684 175 170 106 157 688 358 271 648 325 879 491 167 314 984 593 889 76 344 589 589 221 334 966 969 399 544 253 600 530 932 724 32 260 766 428 385 812 709 432 37 951 589 986 943 32 626 838 817 931 270 734 780 48 691 58 381 426 751 239 632 91 688 953 874 297 68 223 71 493 579 724 911 916 409 368 262 320 534 654 515 888 60 376 78 944 645 872 641 399 806 450 958 4 778 537 865 291 397 968 153 86 307 219 954 467 53 588 459 339 478 214 49 608 988 468 977 664 182 429 99 460 329 708 354 992 516 337 762 722 362 685 176 74 964 986 379 398 826 81 76 256 487 514 89 888 825 80 792 74 399 251 156 800 674 262 364 660 909 35 835 442 49 849 891 917 441 78 890 144 140 272 878 954 819 960 539 592 83 100 789 695 470 315 421 863 365 402 389 280 709 151 838 496 808",
                "output": "685 685 188 102 102 102 48 48 453 48 44 121 102 415 415 951 415 405 393 102 465 465 102 44 617 602 602 44 24 303 303 110 110 110 110 24 855 24 16 151 793 351 151 151 123 41 388 41 513 41 16 67 67 16 957 567 484 484 449 16 542 453 16 15 484 824 824 484 484 46 46 15 245 88 245 245 245 88 88 53 401 401 401 827 708 401 53 804 446 53 609 732 609 53 15 507 168 168 168 15 15 2 127 127 96 268 96 96 52 865 653 52 38 157 298 157 61 788 266 61 528 528 61 38 245 79 79 842 79 38 730 83 83 38 38 2 426 64 810 64 54 143 54 194 54 54 54 2 82 61 61 61 60 139 139 92 92 454 454 92 642 92 92 60 290 290 136 366 364 136 859 136 60 294 284 60 60 2 635 162 142 177 399 177 464 445 445 177 177 165 195 567 508 195 179 179 165 337 337 337 233 165 430 544 536 536 430 430 796 430 320 165 142 97 324 265 265 97 568 430 786 430 97 61 2 136 581 581 136 2 664 245 878 245 2 277 277 2 2 -1 8 8 411 8 659 502 502 848 502 8 6 171 35 35 35 35 22 638 638 549 340 340 158 92 428 427 700 700 700 496 427 240 92 92 92 43 43 43 22 96 318 379 379 318 318 140 96 420 271 879 271 96 587 334 334 334 334 96 76 76 44 116 565 244 214 116 483 380 539 380 116 116 44 44 286 788 286 44 22 211 181 570 492 322 215 181 181 550 181 181 92 92 22 399 208 130 130 565 130 130 22 371 22 22 15 453 130 130 91 385 341 91 35 780 725 624 35 33 37 920 37 33 47 534 47 47 33 33 33 15 15 6 92 28 28 28 6 117 117 463 463 117 63 371 670 371 371 204 204 204 204 161 63 211 63 40 170 40 40 40 6 195 58 661 495 495 58 58 54 6 670 269 6 4 254 130 71 71 53 134 134 134 102 139 441 139 139 139 137 435 137 497 137 102 712 712 188 102 322 322 102 102 73 423 423 237 237 73 73 53 406 323 82 82 53 17 17 17 4 88 77 137 137 77 323 77 344 77 77 59 611 537 537 361 354 354 354 290 213 320 213 766 748 558 347 347 213 59 59 32 634 634 212 212 212 175 175 684 175 170 106 76 76 358 271 167 325 167 491 167 76 76 593 76 76 32 221 221 221 32 253 399 399 253 253 32 530 32 724 32 4 37 428 385 37 709 432 37 32 589 32 943 32 4 270 817 270 270 48 48 48 4 58 4 239 239 239 91 91 68 297 874 297 68 60 71 60 409 409 409 409 409 368 262 60 60 515 515 60 60 4 78 4 645 641 641 399 4 450 4 4 -1 537 291 291 153 153 153 86 53 219 53 467 53 49 459 339 214 214 49 35 468 468 182 664 182 99 99 74 329 176 354 337 516 337 176 722 362 176 176 74 35 379 379 81 81 81 76 74 89 89 89 80 825 80 74 74 35 251 156 35 674 262 35 35 35 35 -1 442 49 -1 441 441 441 78 -1 144 140 83 83 819 819 539 539 83 83 -1 -1 695 470 315 280 365 365 280 389 280 151 151 -1 496 -1 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 87,
                "is_hidden": true
            },
            {
                "input": "335 \n866 500 469 139 291 487 824 232 841 679 834 398 83 438 791 265 886 161 427 651 621 394 978 980 767 766 996 382 541 981 417 603 803 570 576 338 168 959 846 289 135 270 630 369 338 498 109 814 766 722 320 775 790 310 244 330 970 443 925 253 859 304 275 594 446 29 40 268 61 629 959 664 175 717 290 683 683 526 484 272 667 746 737 407 821 380 442 581 243 343 281 891 683 661 110 326 379 799 764 890 0 543 225 423 413 522 224 234 9 937 129 642 75 604 267 341 546 810 890 896 114 227 115 195 428 683 617 167 0 56 845 814 734 998 666 714 754 822 584 699 157 985 869 33 429 579 805 666 965 731 499 819 963 526 276 283 219 681 873 762 887 610 236 46 98 462 540 350 920 580 927 755 278 125 658 857 194 709 351 267 115 541 255 952 50 721 373 240 493 876 916 139 751 865 255 35 944 467 944 949 167 566 796 129 535 28 502 614 431 648 363 254 85 619 2 127 63 219 111 106 31 547 276 512 142 535 937 264 251 18 784 388 518 861 654 925 277 558 484 135 103 792 52 330 785 811 244 606 742 405 857 746 135 253 806 726 30 373 848 180 789 265 71 676 174 580 896 721 626 538 938 211 485 318 503 848 462 838 612 70 465 856 736 798 717 392 343 293 181 403 683 861 962 713 703 191 656 302 777 506 488 579 158 932 263 336 58 394 602 695 654 613 220 963 411 431 524 704 464 204 963 419 371 942 809 11 643 631 729 339 794 172 402 398 163",
                "output": "500 469 139 83 232 232 232 83 679 398 398 83 29 265 265 161 161 135 394 621 394 382 767 767 766 382 382 338 417 417 338 570 570 338 338 168 135 846 289 135 109 109 369 338 109 109 29 766 722 320 310 310 310 244 29 253 443 253 253 29 304 275 29 446 29 0 0 61 0 175 664 175 110 290 272 526 526 484 272 243 407 737 407 380 380 243 243 243 110 281 110 683 661 110 0 0 0 764 0 0 -1 225 224 413 224 224 9 9 0 129 75 75 0 267 114 114 114 114 114 114 0 115 0 167 167 617 167 0 -1 33 814 734 666 666 584 584 584 584 157 157 33 869 33 28 276 499 666 499 731 499 276 526 526 276 219 219 46 610 762 610 610 236 46 35 50 350 350 278 580 278 755 278 125 115 194 194 115 351 267 115 50 255 50 50 35 373 240 139 139 139 139 35 255 255 35 28 467 167 167 167 129 129 129 28 28 2 431 431 363 363 254 85 2 2 -1 63 31 111 106 31 18 276 142 142 18 264 264 251 18 11 388 277 277 654 277 277 135 484 135 103 52 52 30 244 244 244 135 405 405 135 746 135 30 30 726 30 11 180 180 71 265 71 70 174 70 538 721 626 538 211 211 70 318 70 462 462 70 612 70 58 392 736 717 717 392 343 293 181 158 191 191 713 713 703 191 158 302 158 506 488 158 158 58 263 58 58 11 220 220 654 613 220 204 411 204 204 464 464 204 11 419 371 11 809 11 -1 631 339 339 172 172 163 398 163 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 88,
                "is_hidden": true
            },
            {
                "input": "594 \n153 488 657 67 955 787 995 754 860 870 729 348 341 172 569 283 441 826 881 379 84 787 662 617 842 486 83 898 301 54 959 697 278 814 651 799 817 190 904 48 392 615 579 749 804 93 213 521 916 629 816 923 6 534 503 852 607 857 569 540 334 127 802 403 317 747 242 983 520 675 297 203 962 859 838 57 622 767 448 354 117 351 806 657 243 336 487 334 535 440 340 246 565 154 643 996 941 313 89 536 450 317 319 728 470 495 222 67 939 737 77 280 263 264 927 671 780 666 326 486 654 627 259 439 91 172 710 549 119 331 235 621 389 328 624 947 112 126 141 452 599 643 324 331 549 539 943 812 20 157 40 116 480 869 842 882 610 637 799 913 771 818 788 331 481 948 977 176 22 97 876 135 384 830 121 903 976 355 137 362 377 240 722 264 220 569 929 407 934 973 434 346 240 375 22 670 838 540 718 883 456 504 768 440 527 509 300 970 431 524 630 597 391 180 605 129 790 463 181 52 128 240 541 377 577 387 505 643 490 832 133 206 444 335 571 22 411 721 22 64 293 287 557 94 940 613 979 154 77 908 372 596 760 551 607 906 378 341 337 897 970 878 511 270 881 103 118 664 785 648 437 4 392 889 891 719 64 640 336 608 602 998 892 348 961 180 175 619 445 898 37 685 788 555 291 433 305 672 679 687 6 980 173 645 991 780 576 299 308 799 184 724 204 874 564 401 94 55 553 860 152 93 793 432 386 316 156 221 104 889 60 96 164 585 143 969 932 70 608 739 551 692 842 17 259 98 626 291 369 758 846 536 116 541 263 122 611 955 965 816 53 194 440 616 223 579 968 913 94 733 288 292 527 303 827 937 355 94 94 796 504 151 602 314 499 106 669 472 807 663 154 975 823 200 679 667 907 429 791 35 414 823 562 968 967 50 710 790 799 936 388 857 160 27 303 972 571 708 882 949 47 138 477 177 153 996 114 854 155 819 52 71 739 125 61 373 168 974 856 690 760 661 939 559 472 880 600 512 107 631 332 80 111 690 937 93 9 784 875 183 355 785 281 88 253 473 177 724 644 598 173 365 231 306 498 319 606 385 720 306 492 210 70 661 67 773 171 697 754 457 917 229 814 935 983 729 893 403 565 653 899 543 87 155 872 234 130 392 173 19 200 234 873 682 344 259 269 212 41 228 414 43 330 503 727 249 725 737 68 742 788 407 134 494 680 618 167 366 208 718 524 315 794 959 698 304 564 529 724 648 631 90 962 333 467 40 152 995 771 356 901 309 774 554 956 360 277 135 995 582 291 698 210 601 528 425 131 57 644 172 326 522 534 633 292 623 275 615 509 314 746 587 240 717",
                "output": "67 67 67 54 787 754 754 729 729 729 348 341 172 84 283 84 379 379 379 84 83 662 617 486 486 83 54 301 54 48 697 278 190 651 190 190 190 48 48 6 93 579 93 93 93 6 6 6 629 6 6 6 4 503 334 607 569 569 540 334 127 57 403 317 242 242 203 520 297 297 203 57 859 838 57 20 448 448 354 117 89 243 657 243 154 334 334 246 440 340 246 154 154 89 313 941 313 89 67 450 317 222 222 470 222 222 67 20 737 77 20 263 259 259 671 666 666 326 259 259 627 259 91 91 20 119 549 119 112 235 112 389 328 112 112 112 20 20 20 324 324 324 20 20 539 20 812 20 4 40 22 22 331 842 610 610 331 331 771 771 331 788 331 176 176 176 176 22 4 22 135 121 121 121 22 355 355 137 22 240 240 220 264 220 22 407 407 346 434 434 346 240 22 22 4 540 540 456 456 456 440 440 440 300 509 300 180 431 391 391 597 391 180 129 129 52 463 181 52 22 22 133 377 133 387 133 490 490 133 133 22 22 335 22 22 4 22 22 4 4 287 94 94 77 613 154 154 77 4 372 341 551 551 378 378 378 341 337 270 878 878 511 270 103 103 4 4 648 648 437 4 -1 64 719 719 64 37 336 180 602 348 892 348 180 180 175 37 445 37 37 6 555 555 291 6 305 6 6 6 6 -1 173 94 576 780 576 299 184 184 184 94 204 94 564 401 94 55 17 152 152 93 60 432 386 316 156 104 104 60 60 17 70 143 143 70 932 70 17 551 551 17 17 17 9 98 53 291 116 116 536 536 116 53 263 122 53 53 816 816 53 35 94 223 223 94 94 913 94 35 288 94 94 303 94 355 355 94 35 35 504 151 106 314 106 106 35 472 154 663 154 35 823 200 35 667 429 429 35 35 27 50 562 50 967 50 27 388 388 388 388 160 160 27 9 47 571 47 47 47 47 9 114 177 153 114 114 52 155 52 52 9 61 125 61 9 168 107 856 690 661 661 559 559 472 107 600 512 107 80 332 80 9 93 93 93 9 -1 183 183 88 281 281 88 70 177 177 173 644 598 173 70 231 210 210 319 306 385 306 306 210 210 70 67 67 19 171 87 457 457 229 229 87 729 729 729 403 403 87 543 543 543 87 19 130 234 130 19 173 19 -1 41 212 682 344 259 212 212 41 40 43 43 40 249 249 249 68 68 68 40 407 407 134 90 167 618 167 90 208 90 524 315 304 698 698 304 90 529 90 648 631 90 40 333 40 40 -1 135 771 356 309 309 277 554 360 360 277 135 131 582 291 210 210 131 528 425 131 57 -1 172 -1 292 292 292 292 275 275 240 509 314 240 587 240 -1 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 89,
                "is_hidden": true
            },
            {
                "input": "576 \n279 973 875 278 270 903 110 630 948 453 510 91 939 864 149 790 353 690 303 910 769 599 590 682 469 929 210 964 141 695 769 639 864 844 71 134 676 32 625 643 770 251 853 77 551 10 656 145 225 399 1000 597 134 405 979 74 95 507 757 305 876 247 858 511 608 576 844 452 31 454 6 306 3 497 624 528 840 965 547 918 76 4 825 440 394 826 363 997 394 413 237 161 62 196 737 836 488 482 101 553 150 280 657 52 577 993 737 595 442 21 495 927 864 491 345 383 110 180 696 208 374 15 473 3 353 318 203 794 97 339 277 468 782 789 13 642 663 732 114 288 218 545 222 282 413 712 611 131 915 417 923 932 284 635 315 222 373 777 769 105 932 60 886 898 700 722 467 293 204 813 590 668 181 736 918 710 69 213 111 612 23 867 671 671 339 962 518 798 771 907 318 83 110 25 795 88 778 397 612 543 335 669 713 41 74 786 530 839 414 348 272 966 550 944 178 300 260 702 752 15 430 382 679 72 927 335 0 426 558 385 993 613 508 243 53 296 565 329 154 69 315 642 913 541 495 734 108 83 108 787 821 555 709 29 323 575 728 778 862 769 474 154 375 826 805 518 41 902 594 604 64 207 203 458 257 115 815 188 995 971 523 880 817 902 206 627 587 219 257 208 209 616 176 587 33 828 427 590 730 139 806 484 266 699 574 737 628 505 84 901 528 870 91 994 22 886 705 837 417 31 874 479 927 150 980 446 636 364 339 661 809 347 640 249 478 81 434 286 95 597 170 687 147 760 354 197 553 536 529 476 231 969 698 203 967 982 442 625 137 123 590 709 557 550 525 507 121 398 70 823 485 910 911 304 24 299 297 693 556 390 134 894 352 765 425 331 713 472 787 470 313 566 757 805 379 478 550 841 487 930 760 676 587 13 39 212 580 956 696 200 437 234 399 339 583 324 13 408 469 578 716 707 151 698 541 666 345 299 207 643 171 365 569 777 239 913 259 186 3 461 26 376 655 462 944 822 53 883 908 387 324 541 116 957 858 858 937 31 58 733 719 213 35 889 683 604 337 365 351 416 418 275 282 794 1 182 997 569 131 437 813 733 890 513 464 224 737 944 409 59 975 959 871 129 265 892 822 660 497 713 995 508 11 517 873 596 873 232 790 230 851 730 778 234 32 465 332 187 833 549 519 947 926 986 0 89 421 146 384 36 260 61 673 375 375 715 941 415 839 320 916 632 810 227 997 801 342 533 670 1000 164 407 783 282 672 277 360 561 892 883 404 283 193 334 241 570 162 240 246 83 303 830 857 905 607 245",
                "output": "278 875 278 270 110 110 91 453 453 91 91 71 864 149 141 353 303 303 210 769 599 590 469 469 210 210 141 141 71 639 639 71 844 71 32 32 32 10 251 251 251 77 77 10 10 6 145 134 134 134 597 134 74 74 74 31 31 305 305 247 247 31 511 452 576 452 452 31 6 6 3 3 0 76 528 76 547 547 76 76 4 3 440 394 363 363 237 394 237 237 161 62 52 101 488 488 482 101 52 150 52 52 52 21 442 737 595 442 21 15 491 864 491 345 110 110 15 15 208 15 15 3 3 0 318 203 97 97 13 277 13 13 13 13 0 114 114 114 105 218 131 222 131 131 131 611 131 105 417 284 284 284 222 315 222 105 105 769 105 60 60 23 700 700 467 467 293 204 181 590 181 181 69 710 710 69 23 111 23 23 15 671 339 339 318 518 318 771 318 318 83 25 25 15 88 41 397 335 543 335 41 41 41 15 15 530 414 414 348 272 178 550 178 178 15 260 15 15 15 0 382 72 72 0 335 0 -1 385 385 243 613 508 243 53 29 154 329 154 69 29 108 541 541 495 108 108 83 29 29 555 555 29 29 22 154 474 474 769 769 474 154 41 41 805 518 41 33 594 64 64 33 203 115 257 115 33 188 176 971 523 206 817 206 206 176 587 219 208 208 176 176 176 33 33 22 427 139 139 139 84 484 266 84 574 505 628 505 84 22 528 91 91 22 22 13 705 417 417 31 24 479 150 150 81 446 364 364 339 249 347 347 249 249 81 81 70 286 95 70 170 147 147 137 354 197 137 536 529 476 231 203 698 203 137 442 442 137 137 123 121 557 557 550 525 507 121 70 70 24 485 304 304 304 24 13 297 134 556 390 134 13 352 331 425 331 313 472 470 470 313 13 379 379 379 13 13 487 487 13 760 676 587 13 3 13 200 200 696 200 13 234 13 339 324 324 13 3 151 151 151 707 151 3 541 345 345 299 207 171 171 3 239 239 239 186 259 186 3 1 26 1 53 462 53 822 53 31 387 387 324 116 116 31 858 31 31 31 1 35 719 213 35 1 683 604 337 275 351 275 275 275 1 1 1 0 131 569 131 59 224 733 513 513 464 224 59 409 409 59 11 959 871 129 11 11 822 660 497 11 508 508 11 0 232 596 232 232 230 230 32 730 234 234 32 0 332 187 0 549 519 0 926 0 0 -1 36 146 36 36 -1 61 -1 375 320 320 415 415 320 320 227 632 227 227 164 801 342 164 164 164 164 162 282 282 277 277 193 283 404 883 404 283 193 162 241 162 162 83 83 83 -1 245 607 607 607 245 -1",
                "score": 1,
                "testcase_type": "NORMAL_CASE",
                "t_id": 90,
                "is_hidden": true
            }
            ]
        }
        ],
        "question_text": "###Next Weaker Number\nImplement the function `next_weaker_number` which will take a list of integers `nums` along with its size `n` as arguments and returns a updated list, such that each number of updated list will be Next Weaker Number(NWN) for that number.\n\n*Next Weaker Number of `nums[i]` will be `nums[j]` if:*\n\n- *`nums[i]`>`nums[j]` and j > i*\n\n*If there is no Next Weaker Number for nums[i] then consider it as -1.*\n\n---\n\n####Input Format\n\n- First line consists an integer `n`, representing the number of integers in `nums`\n- Second line contains `n` space-separated integers representing the numbers in `nums`\n\n---\n\n####Output Format\n\n- Print `n` space-separated integers representing the next weaker number for each of the numbers in `nums`\n\n---\n\n####Example\n######Input:\n    5\n    9 4 5 2 1\n######Output:\n    4 2 2 1 -1\n\n######Explanation\nFor the given array,\n\n- The next weaker number for 9 is 4.\n- The next weaker number for 4 is 2. \n- The next weaker number for 5 is 2. \n- The next weaker number for 2 is 1. \n- There is no smaller number for 1 on the right side. So we consider NWN as -1 \n\n---\n\n####Constraints\n\n- 1 <=`n`<= 1000\n- 0 <=`nums[i]`<= 1000\n\n---\n",
        "code_data": "",
        "short_text": "Next Weaker Number",
        "question_type": "CODING",
        "question_key": 0,
        "skills": [],
        "question_format": "CODING_PRACTICE",
        "content_type": "MARKDOWN",
        "difficulty": "HARD",
        "remarks": "",
        "scores_updated": true,
        "scores_computed": 10,
        "questions_asked_by_companies_info": [],
        "test_case_evaluation_metrics": [
        {
            "language": "C",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "CPP",
            "time_limit_to_execute_in_seconds": 2.01
        },
        {
            "language": "PYTHON39",
            "time_limit_to_execute_in_seconds": 10.01
        }
        ],
        "code_repository_details": null,
        "solutions": [
        {
            "order": 1,
            "title": {
            "content": "Code",
            "content_type": "TEXT"
            },
            "description": {
            "content": "",
            "content_type": ""
            },
            "code_details": [
            {
                "code_content": "def next_weaker_number(n, nums):\n    \n    for i in range(n):\n        nwe = -1\n        for j in range(i+1, n):\n            if nums[i]>nums[j]:\n                nwe = nums[j]\n                break\n            \n        nums[i] = nwe\n    return nums    \n    ",
                "language": "PYTHON39",
                "default_code": true
            }
            ],
            "complexity_analysis": {
            "content": "",
            "content_type": ""
            }
        }
        ],
        "hints": [],
        "code_metadata": [
        {
            "is_editable": true,
            "language": "PYTHON39",
            "code_data": "def next_weaker_number(n, nums):\n    \n    return nums\n    ",
            "default_code": true
        },
        {
            "is_editable": true,
            "language": "JAVA",
            "code_data": "class Solution{\n    int[] next_weaker_number(int n, int[] numbers){\n        \n        return numbers;\n    }\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "CPP",
            "code_data": "#include<bits/stdc++.h>\nusing namespace std;\n\nvector<int> next_weaker_number(int n, vector<int> numbers){\n        \n    return numbers;\n}",
            "default_code": false
        },
        {
            "is_editable": true,
            "language": "C",
            "code_data": "#include<stdio.h>\r\n\r\nint* next_weaker_number(int n, int numbers[]){\r\n        \r\n    return numbers;\r\n}",
            "default_code": false
        }
        ],
        "cpp_python_time_factor": 0,
        "question_id": "18089271-2f77-4527-8015-2dfbb5987d04",
        "tag_names": [
        "POOL_1",
        "DIFFICULTY_HARD",
        "IN_OFFLINE_EXAM",
        "TOPIC_PYTHON_CODING",
        "SOURCE_NI_ASSESMENT",
        "SUB_TOPIC_FUNCTIONS",
        "COMPANY_RECYKAL",
        "IS_PRIVATE",
        "18089271-2f77-4527-8015-2dfbb5987d04"
        ],
        "language_code_repository_details": [
        {
            "language": "PYTHON39",
            "file_path_to_execute": "main.py",
            "default_file_path_to_submit_code": "solution.py",
            "code_repository": [
            {
                "file_name": "main.py",
                "file_type": "FILE",
                "file_content": "ZnJvbSBzb2x1dGlvbiBpbXBvcnQgbmV4dF93ZWFrZXJfbnVtYmVyCgoKZGVmIG1haW4oKToKICAgIG4gPSBpbnQoaW5wdXQoKSkKICAgIG51bXMgPSBsaXN0KG1hcChpbnQsIGlucHV0KCkuc3BsaXQoKSkpCiAgICAKICAgIG51bXMgPSBuZXh0X3dlYWtlcl9udW1iZXIobiwgbnVtcykKICAgIAogICAgcHJpbnQoKm51bXMpCgoKaWYgX19uYW1lX18gPT0gJ19fbWFpbl9fJzoKICAgIG1haW4oKQ=="
            }
            ]
        },
        {
            "language": "JAVA",
            "file_path_to_execute": "Main.java",
            "default_file_path_to_submit_code": "Solution.java",
            "code_repository": [
            {
                "file_name": "Main.java",
                "file_type": "FILE",
                "file_content": "aW1wb3J0IGphdmEudXRpbC4qOwoKcHVibGljIGNsYXNzIE1haW4gewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIFNjYW5uZXIgc2Nhbm5lciA9IG5ldyBTY2FubmVyKFN5c3RlbS5pbik7CiAgICAgICAgCiAgICAgICAgaW50IG4gPSBzY2FubmVyLm5leHRJbnQoKTsKICAgICAgICBpbnRbXSBudW1iZXJzID0gbmV3IGludFtuXTsKICAgICAgICAKICAgICAgICBmb3IgKGludCBpID0gMDsgaSA8IG47IGkrKykgewogICAgICAgICAgICBudW1iZXJzW2ldID0gc2Nhbm5lci5uZXh0SW50KCk7CiAgICAgICAgfQogICAgICAgIAogICAgICAgIFNvbHV0aW9uIHNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKCk7CiAgICAgICAgaW50W10gcmVzdWx0ID0gc29sdXRpb24ubmV4dF93ZWFrZXJfbnVtYmVyKG4sIG51bWJlcnMpOwogICAgICAgIAogICAgICAgIGZvcihpbnQgaT0wO2k8bjtpKyspewogICAgICAgICAgICBTeXN0ZW0ub3V0LnByaW50KHJlc3VsdFtpXSsiICIpOwogICAgICAgIH0KICAgICAgICAKICAgICAgICBzY2FubmVyLmNsb3NlKCk7CiAgICB9Cn0K"
            }
            ]
        },
        {
            "language": "CPP",
            "file_path_to_execute": "main.cpp",
            "default_file_path_to_submit_code": "solution.h",
            "code_repository": [
            {
                "file_name": "main.cpp",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8Yml0cy9zdGRjKysuaD4KI2luY2x1ZGUic29sdXRpb24uaCIKCnVzaW5nIG5hbWVzcGFjZSBzdGQ7CgppbnQgbWFpbigpewogICAgaW50IG47CiAgICBjaW4+Pm47CiAgICAKICAgIHZlY3RvcjxpbnQ+IG51bWJlcnMobik7CiAgICAKICAgIGZvcihpbnQgaT0wO2k8bjtpKyspewogICAgICAgIGNpbj4+bnVtYmVyc1tpXTsKICAgIH0KICAgIAogICAgbnVtYmVycyA9IG5leHRfd2Vha2VyX251bWJlcihuLCBudW1iZXJzKTsKICAgIAogICAgZm9yKGludCBudW1iZXI6bnVtYmVycyl7CiAgICAgICAgY291dDw8bnVtYmVyPDwiICI7CiAgICB9CiAgICByZXR1cm4gMDsKfQ=="
            }
            ]
        },
        {
            "language": "C",
            "file_path_to_execute": "main.c",
            "default_file_path_to_submit_code": "solution.c",
            "code_repository": [
            {
                "file_name": "main.c",
                "file_type": "FILE",
                "file_content": "I2luY2x1ZGU8c3RkaW8uaD4NCg0KDQojaWZuZGVmIEZJTEUxX0gNCiNkZWZpbmUgRklMRTFfSA0KaW50KiBuZXh0X3dlYWtlcl9udW1iZXIoaW50LCBpbnRbXSk7DQojZW5kaWYNCg0KaW50IG1haW4oKXsNCiAgICBpbnQgbjsNCiAgICBzY2FuZigiJWQiLCAmbik7DQogICAgDQogICAgaW50IG51bWJlcnNbMTAwMV07DQogICAgaW50KiByZXN1bHQ7DQogICAgDQogICAgZm9yKGludCBpPTA7aTxuO2krKyl7DQogICAgICAgIHNjYW5mKCIlZCIsJm51bWJlcnNbaV0pOw0KICAgIH0NCiAgICANCiAgICByZXN1bHQgPSBuZXh0X3dlYWtlcl9udW1iZXIobiwgbnVtYmVycyk7DQogICAgDQogICAgZm9yKGludCBpPTA7aTxuO2krKyl7DQogICAgICAgIHByaW50ZigiJWQgIiwgcmVzdWx0W2ldKTsNCiAgICB9DQogICAgcmV0dXJuIDA7DQp9"
            }
            ]
        }
        ]
    }
    ]
} */

export default myData
