![baner](<https://github.com/GhostDevs3/cs11_frontend/blob/develop/banner%20(1).png>)

# **CODE SPACE JOBS PORTAL - FRONTEND**

CODE SPACE JOBS PORTAL, its a social website to connect employers with all code space students.

- [**CODE SPACE JOBS PORTAL - FRONTEND**](#code-space-jobs-portal---frontend)
  - [**DEPENDENCIES**](#dependencies)
  - [**HOW TO RUN THE PROJECT**](#how-to-run-the-project)
  - [**PROJECT LAYOUT**](#project-layout)
  - [**ROUTES**](#routes)
    - [" / "](#--)
  - [**VIEWS**](#views)
    - [**CANDIDATE PROFILE**](#candidate-profile)
    - [**HOME PAGE**](#home-page)
    - [**CANDIDATE PROFILE**](#candidate-profile-1)
  - [**COMPONENTS**](#components)
    - [**Form Input**](#form-input)
    - [**Image Input**](#image-input)
    - [**Text Input**](#text-input)
    - [**Select Input**](#select-input)
    - [**Text Area Input**](#text-area-input)
    - [**Home**](#home)
    - [**Register Form**](#register-form)
    - [**Login Form**](#login-form)
    - [**Reusable components** :](#reusable-components-)
  - [**MODELS**](#models)
    - [**CANDIDATE**](#candidate)
  - [**CONTRIBUTORS**](#contributors)
    > > > > > > > f61d71670f6a07e52ba4b3bf78c5827c0618de31
        - [**CANDIDATE PROFILE**](#candidate-profile)
- [**CODE SPACE JOBS PORTAL - FRONTEND**](#code-space-jobs-portal---frontend)
  - [**DEPENDENCIES**](#dependencies)
  - [**HOW TO RUN THE PROJECT**](#how-to-run-the-project)
  - [**PROJECT LAYOUT**](#project-layout)
  - [**ROUTES**](#routes)
    - [" / "](#--)
  - [**VIEWS**](#views)
    - [**CANDIDATE PROFILE**](#candidate-profile)
    - [**HOME PAGE**](#home-page)
    - [**CANDIDATE PROFILE**](#candidate-profile-1)
  - [**COMPONENTS**](#components)
    - [**Form Input**](#form-input)
    - [**Image Input**](#image-input)
    - [**Text Input**](#text-input)
    - [**Select Input**](#select-input)
    - [**Text Area Input**](#text-area-input)
    - [**Home**](#home)
    - [**Register Form**](#register-form)
    - [**Login Form**](#login-form)
    - [**Reusable components** :](#reusable-components-)
  - [**MODELS**](#models)
    - [**CANDIDATE**](#candidate)
  - [**CONTRIBUTORS**](#contributors)

## **DEPENDENCIES**

|                                                 Packages                                                 | Description                                                                                                                                      |
| :------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
|                               [react](https://www.npmjs.com/package/react)                               | React is a JavaScript library for building user interfaces.                                                                                      |
|                         [react-dom](https://www.npmjs.com/package/react-router)                          | The react-router package is the heart of React Router and provides all the core functionality for both react-router-dom and react-router-native. |
|                          [web-vitals](https://www.npmjs.com/package/web-vitals)                          | The web-vitals library is a tiny, modular library for measuring all the Web Vitals metrics on real users                                         |
|   [@fortawesome/fontawesome-svg-core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)   | SVG framework                                                                                                                                    |
| [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons) | SVG framework                                                                                                                                    |
|   [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)   | SVG framework                                                                                                                                    |
|      [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)      | Official React component for Font Awesome 5                                                                                                      |
|                        [react-router](https://www.npmjs.com/package/react-router)                        | Declarative routing for React                                                                                                                    |
|                    [react-router-dom](https://www.npmjs.com/package/react-router-dom)                    | Declarative routing for React web applications                                                                                                   |
|                   [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)                   | Plugin for typewriter effect                                                                                                                     |

|                            Testing libraries                            | Description                                                                            |
| :---------------------------------------------------------------------: | :------------------------------------------------------------------------------------- |
| [user-event](https://www.npmjs.com/package/@testing-library/user-event) | Fire events the same way the user does                                                 |
|      [react](https://www.npmjs.com/package/@testing-library/react)      | Simple and complete React DOM testing utilities that encourage good testing practices. |
|   [jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)   | Custom jest matchers to test the state of the DOM                                      |

## **HOW TO RUN THE PROJECT**

## **PROJECT LAYOUT**

```shell
    /
    ├──public
    └───src
        ├───assets
        │   └───img
        ├───components
        │   └───Form
        │       ├───base
        │       └───inputs
        ├───models
        ├───services
        ├───styles
        ├───utils
        └───views

 src
 ┣ assets
 ┃ ┗ img
 ┃ ┃ ┣ banner-img-1.png
 ┃ ┃ ┣ banner-img-2.png
 ┃ ┃ ┣ banner-img-3.png
 ┃ ┃ ┣ img-people.png
 ┃ ┃ ┗ logo-negro.png
 ┣ components
 ┃ ┣ Form
 ┃ ┃ ┣ base
 ┃ ┃ ┗ inputs
 ┃ ┣ UI
 ┃ ┃ ┣ modulesUI
 ┃ ┃ ┃ ┣ Button.module.css
 ┃ ┃ ┃ ┣ InfoAlert.module.css
 ┃ ┃ ┃ ┣ Input.module.css
 ┃ ┃ ┃ ┗ Modal.module.css
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┣ InfoAlert.js
 ┃ ┃ ┣ Input.js
 ┃ ┃ ┗ Modal.js
 ┃ ┣ login_register_forms
 ┃ ┃ ┣ LoginForm.js
 ┃ ┃ ┗ RegisterForm.js
 ┃ ┗ Home.js
 ┣ config
 ┃ ┗ urls.js
 ┣ models
 ┃ ┗ delete.this
 ┣ providers
 ┃ ┗ LoginModalProvider.js
 ┣ reducers
 ┃ ┗ registerReducer.js
 ┣ services
 ┃ ┗ apiRequest.js
 ┣ styles
 ┃ ┣ Home.module.css
 ┃ ┣ LoginForm.module.css
 ┃ ┗ RegisterForm.module.css
 ┣ utils
 ┃ ┗ regExp.js
 ┣ views
 ┃ ┗ HomePage.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

## **ROUTES**

### " / "

Home page, fully responsive where animations controlled by states (useState hook) and typewriter from the "typewriter-effect" library version: 2.19.0 have been applied. In the main load of the page, the "Remember me" functionality has been implemented, which automatically logs the user in if this option has been previously chosen

<a href="#code-space-jobs-portal---frontend"><span> &uArr; Table of contents</span></a>

---

## **VIEWS**

### **CANDIDATE PROFILE**

### **HOME PAGE**

### **CANDIDATE PROFILE**

<a href="#code-space-jobs-portal---frontend"><span> &uArr; Table of contents</span></a>

---

## **COMPONENTS**

### **Form Input**

### **Image Input**

### **Text Input**

### **Select Input**

### **Text Area Input**

### **Home**

### **Register Form**

### **Login Form**

### **Reusable components** :

- Input

- Alert

- Modal for rendering in portal

- Button

<a href="#code-space-jobs-portal---frontend"><span> &uArr; Table of contents</span></a>

---

## **MODELS**

### **CANDIDATE**

<a href="#code-space-jobs-portal---frontend"><span> &uArr; Table of contents</span></a>

---

## **CONTRIBUTORS**

| Name             |                      Github                       |                         Linkedin                         |                    Email                    |
| :--------------- | :-----------------------------------------------: | :------------------------------------------------------: | :-----------------------------------------: |
| Rafael Fernandez |    [**&check;**](https://github.com/iRaphiki)     |   [**&check;**](https://www.linkedin.com/in/rafa-fr/)    |  [Contact me](mailto:imraphiki@gmail.com)   |
| Alina Dorosh     | [**&check;**](https://github.com/AlinaDorosh-dev) | [**&check;**](https://www.linkedin.com/in/alina-dorosh/) | [Contact me](mailto:alina.dorosh@gmail.com) |

<a href="#code-space-jobs-portal---frontend"><span> &uArr; Table of contents</span></a>

---
