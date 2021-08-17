<script>
    import { fade } from 'svelte/transition';
    import avatar from '../assets/avatar.jpg';

    const MAX_PAGE = 4;
    const CONTINUE_TEXTS = ['Continue 👉', 'Next Next Next!!! 👉', 'Oh! There\s more! 👉', 'Go back to page 1 ✌️'];

    let currentPage = 1;

    function handleContinue() {
        if (currentPage < MAX_PAGE) {
            currentPage += 1;
        } else {
            currentPage = 1;
        }
	}
</script>

<div class="m-16 p-12 mt-36">
    {#if currentPage == 1}
    <div in:fade="{{ delay: 500, duration: 500 }}" out:fade="{{ duration: 500 }}">
        <h1 class="text-4xl underline font-bold my-4">Hello! 👋</h1>
        <p class="text-2xl my-2">My name is Nonthakon Jitchiranant.</p>
        <p class="text-lg my-1 w-2/3">I am passionate Computer Engineering student from KMITL, I am interesting in several fields of software development.</p>
        <p class="text-lg my-1 w-2/3">I'm quite good at Web Development and have spent time with both Frontend & Backend.</p>
        <p class="text-lg my-1 w-2/3">I worked with Node.js, React & Redux, Vue, Django, Tailwind.css, Firebase</p>
        <p class="text-lg my-1 w-2/3">Also I'm able to work with others stuff such as Machine Learning, Blockchain, Hardware Programming, etc.</p>

        <p class="text-lg my-2 w-2/3 underline">Contact</p>
        <p>
            Email: non_thakon@hotmail.com |
            Linkedin: @nonthakonjitchiranant |
            Github: nonkung51
        </p>
        <img class="ml-auto w-32 h-32 rounded-full" src="{avatar}" alt="Avatar" />
    </div>
    {:else if currentPage == 2}
    <div in:fade="{{ delay: 500, duration: 500 }}" out:fade="{{ duration: 500 }}">
        <h1 class="text-4xl underline font-bold my-4">Web Development 💻👨‍💻</h1>
        <p class="text-lg my-2 w-2/3">I worked with several Web project. Here's examples</p>
        <div class="flex flex-col">
            <a class="underline" href="https://github.com/nonkung51/CE-Boostup-8-Grader-Backend"> 👉 (Backend) Grader in CE Boostup 8 Camp (It's simply a pre computer engineering for KMITLer)</a>
            <a class="underline" href="https://github.com/nonkung51/Networky-Bot"> 👉 (Backend) Networky-Bot: A Simple LINE Chatbot for learning Computer Network</a>
            <a class="underline" href="https://github.com/nonkung51/webrtc-video-chat"> 👉 (Frontend) Socke(t) Talky: A Simple Video Call App built with React & WebRTC</a>
            <a class="underline" href="https://github.com/MrNithi/chokchana-frontend"> 👉 (Frontend) Chokchana: Lottery Game built with the Power of Blockchain</a>
        </div>
        <p class="text-lg my-2 w-2/3">Since I really enjoy Web Development there's a lot more project which you can check out <span class="underline text-blue-400"><a href="https://github.com/nonkung51">here</a></span>.</p>

        <div class="h-32"></div>
    </div>
    {:else if currentPage == 3}
    <div in:fade="{{ delay: 500, duration: 500 }}" out:fade="{{ duration: 500 }}">
        <h1 class="text-4xl underline font-bold my-4">Others 🤖🔗</h1>
        <p class="text-lg my-2 w-2/3">I also interesting in other field such as Artificial Intelligent & Blockchain.</p>
        <p class="text-lg my-2 w-2/3">Here's some example of Artificial Intelligent related.</p>
        <div class="flex flex-col">
            <a 
                class="underline" 
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/8M8MKF9ZDHM5"
                > 
                👉 (🤖) I finished Deep Learning Specialization Course by DeepLearning.AI
            </a>
            <a 
                class="underline" 
                href="https://nonthakon.medium.com/ai-%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%88%E0%B8%89%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%87%E0%B8%9B%E0%B8%AD%E0%B8%94-e9d02cdaff64"
                > 
                👉 (🤖) Lung Cancer Detection using Convolutional Neural Network
            </a>
            <a 
                class="underline" 
                href="https://nonthakon.medium.com/%E0%B9%83%E0%B8%8A%E0%B9%89-mobilenet-%E0%B8%88%E0%B8%B3%E0%B9%81%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%83%E0%B8%99-keras-232f5a62e625"
                > 
                👉 (🤖) Using MoblieNet with Keras as Image Recognition Model
            </a>
            <a 
                class="underline" 
                href="https://nonthakon.medium.com/%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%A2-covid-19-%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99%E0%B8%9F%E0%B8%B4%E0%B8%A5%E0%B9%8C%E0%B8%A1-x-ray-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-pytorch-1-%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5-89ac923eb204"
                > 
                👉 (🤖) Detect Covid with X-ray films (Using PyTorch with Pre-Trained Model)
            </a>
            <a 
                class="underline" 
                href="https://nonthakon.medium.com/machine-learning-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-python-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%88%E0%B8%B1%E0%B8%9A-spam-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-naive-bayes-scikit-learn-401cca591252"
                > 
                👉 (🤖) Spam Detection using simply Naive Bayes (scikit-learn)
            </a>
        </div>
        <p class="text-lg my-2 w-2/3">Apart from Artificial Intelligent I also recently got into Blockchain stuff. Here's some example of Blockchain related.</p>

        <div class="flex flex-col">
            <a 
                class="underline" 
                href="https://github.com/nonkung51/chokchana-contracts"
                > 
                👉 (🔗) Chokchana: Lottery Game built with the Power of Blockchain (Contracts)
            </a>
            <a 
                class="underline" 
                href="https://github.com/nonkung51/sapha-gotchi-contracts"
                > 
                👉 (🔗) SaphaGotchi: A Funny TamaGotchi game on Blockchain (Contracts)
            </a>
            <a 
                class="underline" 
                href="https://github.com/nonkung51/sapha-gotchi-contracts"
                > 
                👉 (🔗) AnonyTalk: A Simple anonymous twitter clone on Blockchain
            </a>
        </div>

        <div class="h-32"></div>
    </div>
    {:else if currentPage == 4}
    <div in:fade="{{ delay: 500, duration: 500 }}" out:fade="{{ duration: 500 }}">
        <h1 class="text-4xl underline font-bold my-4">More... 🧐</h1>

        <p class="text-lg my-2 w-2/3">Thanks a lot for continue reading to this page 🙏🙏</p>

        <p class="text-lg my-2 w-2/3">Apart from all stuff about Software I also have others hobby like.</p>

        <p class="text-lg my-2 w-2/3">🍿 Watching Movies | 🎶 Listen to Music | 📚 Reading Books</p>

        <p class="text-lg my-2 w-2/3">Also I enjoyed writing blogs about stuffs please checkout <span class="underline text-blue-400"><a href="https://nonthakon.medium.com">here</a></span>.</p>

        <div class="h-32"></div>
    </div>
    {/if}

    <div in:fade="{{ delay: 500, duration: 500 }}" out:fade="{{ duration: 500 }}">
    <p>
        Current Page { currentPage } / { MAX_PAGE } 
    </p>
    <p 
        class="ml-auto text-blue-400 underline cursor-pointer" 
        on:click={handleContinue}
    >
        {CONTINUE_TEXTS[currentPage - 1]}
    </p>
</div>
</div>