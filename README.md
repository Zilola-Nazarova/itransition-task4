> [!IMPORTANT]
> This project was developed within the iTransition training program.

<a name="readme-top"></a> 

## 📗 Table of Contents

- [📖 About the Project](#about-project)
- [💻 Getting Started](#getting-started)
- [🙏 Acknowledgements](#acknowledgements)

<p align="right">(<a href="#readme-bottom">to bottom</a>)</p>

## 📖 About the Project <a name="about-project"></a>

This project is a web application developed using React for the frontend and Rails for the backend Bootstrap.

Users can register and authenticate, with unauthenticated users only having access to the registration or login forms. Authenticated users can view a "users" table displaying user information, including identifier, name, email, registration date, last login date, and status.

The leftmost column of the table features checkboxes for multiple selection. There is a toolbar with actions such as Block, Unblock, and Delete. Users have the ability to delete or block themselves or other users, and if another user blocks or deletes a user, the affected user is redirected to the login page upon any subsequent request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<details>
<summary>Frameworks</summary>
  <ul>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
    <li><a href="https://rubyonrails.org/">Ruby on Rails</a></li>
  </ul>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites

- GitHub account;
- [Git](https://git-scm.com/downloads) installed on your OS;
- VSCode (or another code editor);
- modern browser (supporting HTML5 and CSS3) is highly recommended;
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) installed;
- [Ruby on Rails](https://gorails.com/guides) installed;
- [Node.js and npm](https://nodejs.org/) installed;
- [Redis](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) installed.

### Setup

Login to your GitHub account. Clone this repository to your desired folder:

```
cd my-folder
git clone git@github.com:Zilola-Nazarova/itransition-task3.git
```

### Install

Navigate to the folder and install all dependencies:
```
cd itransition-task3
npm install
bundle install
```

### Usage

Run the server with Redis:
```
redis-server
./bin/dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I'm grateful for the opportunity provided by the company that presented this task. It has been a valuable learning experience, allowing me to deepen my understanding of web development with React and Rails. I appreciate the opportunity to apply and expand my skills in building secure and functional web applications.

<p align="right">(<a href="#readme-top">back to top</a>)</p>