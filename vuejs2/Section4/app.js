new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack() {
			let damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			if (this.checkWin()) {
				return;
			}
			this.turns.unshift({
				isPlayer: true,
				text: `Player hits monster for ${damage}`
			});
			this.monsterAttack();
		},
		specialAttack() {
			let damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			if (this.checkWin()) {
				return;
			}
			this.turns.unshift({
				isPlayer: true,
				text: `Player hits monster (Special!) for ${damage}`
			});
			this.monsterAttack();
		},
		heal() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				text: `Player heals for 10`
			});
			this.monsterAttack();
		},
		giveUp() {
			this.gameIsRunning = false;
			this.turns = [];
		},
		monsterAttack() {
			let damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false,
				text: `Monster hits player for ${damage}`
			});
		},
		calculateDamage(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin() {
			if (this.monsterHealth <= 0) {
				if (confirm('You won! New game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0) {
				if (confirm('You lost! New game?')) {
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		}
	}
});