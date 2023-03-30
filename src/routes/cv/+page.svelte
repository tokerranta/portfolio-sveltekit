<div class="paper">
    <section class="header">
        <h1 class="text-4xl mb-0">Markus Rantanikunen</h1>
        <p class="mt-0 text-orange-400">Senior fullstack webdev</p>
        <p>Markus is a passionate full stack developer, mainly within Javascript and React/Node, but also with plenty of .NET experience.</p>
        <p>Curiosity and a profound interest in technology is a driving force in Markus; always learning and acquiring new skills in the ever changing world of system development. Whatever his current assignment may be, Markus is always following some course on Pluralsight or testing some new framework in his spare time.</p>
        <p>Markus has worked in greenfield development projects as well as maintenance projects and likes to contribute in as many parts as possible of the development process. He has experience from various industries, such as fintech, insurance, online gambling, retail and telco.</p>
        <p>As for personality, Markus is an open, amicable team player; with a can-do positive attitude, keen on sharing his knowledge and always with a smile on his face.</p>
    </section>
    <aside class="aside">
        <h1 class="text-2xl">Tech stack</h1>
        <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Redux</li>
            <li>Rxjs</li>
            <li>Node</li>
            <li>Graphql</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>Remix</li>
            <li>Svelte</li>
            <li>FP</li>
        </ul>
    </aside>
    <section class="main">
        <h1 class="text-3xl mb-4">Most recent contracts</h1>
        <h2 class="text-2xl">Svenska Spel, <em class="text-lg">may 2021 - mars 2023</em></h2>
        <p class="mt-0 mb-2 text-orange-400">Lead frontend engineer</p>
        <p>Svenska spel is an online/offsite gaming company. They provide a variety of products such as: sports betting, poker, lottery. I work in the game admin team where my focus is to develop new features for the employees to help them create new betting coupons. The team consists of 4 developers, 2 testers and a scrum master. I have taken the role as a tech lead and I try to teach functional programming principles whenever possible.</p>

        <h2 class="text-2xl mt-4">Fora, <em class="text-lg">may 2019 - may 2021</em></h2>
        <p class="mt-0 mb-2 text-orange-400">Fullstack engineer</p>
        <p>Fora helps companies and their employees to navigate their collectively agreed pension and insurance solution.</p>
        <p> worked on a project called Nova as a senior fullstack Javascript developer. The goal of the project was to build a new digital platform for customers to simplify the process of moving money between different insurance providers etc.</p>
        <p>team of ~10 persons had full responsibility for the product, and I was highly involved in the decisions concerning the tech stack and mentor to junior developers in the team.</p>

        <h2 class="text-2xl mt-4">Klarna, <em class="text-lg">2018</em></h2>
        <p class="mt-0 mb-2 text-orange-400">Fullstack engineer</p>
        <p>Klarna is one of Europe’s largest banks, offering online payment solutions to millions of customers globally.</p>
        <p>I worked as a developer in the Customer Support Team, with the Javascript-based chat platform, built with React and Node</p>
        <p>The team of ~6 persons had full responsibility for the product – development, testing, deployment, monitoring and maintenance. We worked cross functionally, and I was often involved in discussions regarding code structure and architectural decisions.</p>
    </section>
</div>
<style>
    .paper {
        display: grid;
        padding: 3rem 5rem;
        width: 50vw;
        min-height: 80vh;
        margin: 1rem auto;
        background: white;
        box-shadow: 0px 0px 1rem #666;
        grid-template-columns: .5fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
        "header header header"
        "aside main main";
    }

    .header {
        grid-area: header;
        background: #eee;
        padding: 2rem;
        margin-bottom: 2rem;
    }

    .header p {
        margin: 2rem 0;
        font-size: 1.5rem;
    }

    .header p.mt-0 {
        margin: 0;
    }

    .aside {
        grid-area: aside;
    }

    .main {
        grid-area: main;
    }
</style>