function Portfolio() {
    return (
      <section>
        <h3 id="portfolio" class="title">Portfolio</h3>
        <div class="projects">
          <div>
            <h4>Run Buddy</h4>
            <a href="https://mjgiannelli.github.io/run-buddy/" target="_blank"><img class="picture"
              src="./assets/images/run-buddy.png" alt="Run Buddy" /></a>
          </div>

          <div class="secondary-projects">
            <div class="align">
              <h4>Horiseon</h4>
              <a href="https://mjgiannelli.github.io/challenge-1-horiseon-accessibility-correction/"
                target="_blank"><img class="picture-2" src="./assets/images/horiseon.png" alt="horiseon" /></a>
            </div>
            <div class="align">
              <h4>Robot Gladiators</h4>
              <a href="https://mjgiannelli.github.io/robot-gladiators/" target="_blank"><img class="picture-2"
                src="assets/images/robot-gladiators.jpg" alt="robot gladiators" /></a>
            </div>
            <div class="align">
              <h4>Rock, Paper, Scissors</h4>
              <a href="https://mjgiannelli.github.io/rock-paper-scissors/" target="_blank"><img class="picture-2"
                src="assets/images/rock_paper_scissors.png" alt="rock paper scissors" /></a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Portfolio;