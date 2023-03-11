<a name="readme-top"></a>

  <br />
<div align="center">
  <img src="https://img.icons8.com/3d-fluency/94/null/test-passed.png"/>

  <h3 align="center">LinkedIn Skill Quiz</h3>

  <p align="center">
    Boost Your Professional Profile with LinkedIn Skill Assessments: Take the Test Now!
    <br />
    <br />
    <a href="https://linkedin-skill-assessments.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/josafamarengo/skill-assessments/issues">Report Bug</a>
    ·
    <a href="https://github.com/josafamarengo/skill-assessments/issues">Request Feature</a>
  </p>

</div>

## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>

## About The Project

![skill-assessments Screen Shot](./src/assets/img/screenshots/screenshot.jpg)

I had the idea to build this project because I was planning to do some Linkedin skills assessments, but I wanted to test my knowledge first.

I had already visited the [Ebazhanov's Github repository](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes) that collects questions that users have answered in their assessments.

And I saw an immersion of [Alura](https://www.alura.com.br/) with [Mario Souto](https://github.com/omariosouto) and [Juliana Amoasei](https://github.com/JulianaAmoasei) in early March 2023, where they developed a quiz.

When I was putting things together, I thought of using the questions available in this repository as a database for a competency quiz project.

To extract the questions from the Markdown file they were in and put them into a semi-structured file like JSON, I created the following script in Python:

```python	
import markdown
import json
import requests

# Defines the link to the Markdown file
url_arquivo = 'https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/html/html-quiz.md'

# Makes an HTTP request to get the contents of the file
conteudo_arquivo = requests.get(url_arquivo).text

# Converts the contents of the file from Markdown to HTML
conteudo_html = markdown.markdown(conteudo_arquivo)

# Selects only the content of the <h2> tag
titulo = conteudo_html.split('<h2>')[1].split('</h2>')[0]

# Selects only the content of the <h4> tag
questions = conteudo_html.split('<h4>')[1:]
questions = [q.replace('</h4>', '') for q in questions]

# Separate questions from alternatives by storing them in a dictionary
for i, q in enumerate(questions):
    question = q.split('<ul>')[0]
    alternatives = q.split('<li>')[1:]
    alternatives = [a.replace('</li>', '') for a in alternatives]
    is_correct = [True if '[x]' in a else False for a in alternatives]
    alternatives = [a.replace('[x]', '') for a in alternatives]
    alternatives = [a.replace('[ ]', '') for a in alternatives]
    alternatives = [{'alternative': a, 'is_correct': c} for a, c in zip(alternatives, is_correct)]
    questions[i] = {
        'question': question,
        'alternatives': alternatives
    }

# Create a dictionary to store questions
conteudo_json = {
    'title': titulo,
    'questions': questions
}

nome_arquivo = titulo + '.json'
with open(nome_arquivo, 'w') as f:
    json.dump(conteudo_json, f)
```

From there, I created the front end to use the constant data in the JSON files.

### Build With

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white)![React](https://img.shields.io/badge/-React-000000?style=flat&logo=react&logoColor=61DAFB)![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=typescript&logoColor=007ACC)

![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-000000?style=flat&logo=tailwind-css&logoColor=38B2AC)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)


### Installation

1. Clone the repo

```bash

git clone https://github.com/josafamarengo/skill-assessments.git

```

2. Go to project folder

```bash

cd skill-assessments

```

3. Install packages

```bash

npm install

```

OR

```bash

yarn

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

See the [open issues](https://github.com/josafamarengo/skill-assessments/issues) for a list of proposed features (and known issues).

- [ ] Use Matter.js to create a animation 
- [ ] Add Authentication
- [ ] Add a profile page

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

![Josafá Marengo](https://img.shields.io/badge/-Linkedin-000000?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josafamarengo/)
![Josafá Marengo](https://img.shields.io/badge/-Email-000000?style=flat&logo=Gmail&logoColor=white&link=https://josafa.com.br/#contact)
![Josafá Marengo](https://img.shields.io/badge/-Portfolio-000000?style=flat&logo=Google-Chrome&logoColor=white&link=https://josafa.com.br/)


## Acknowledgments

- [Ebazhanov](https://github.com/Ebazhanov) - [linkedin-skill-assessments-quizzes](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes)
- [Alura](https://www.alura.com.br/) - AluraQuiz
- [Ícone do Quiz](https://icons8.com/icon/f3o1AGoVZ2Un/test-passed)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/josafamarengo">Josafá Marengo</a>
</div>

