export class AnimateHelper {

	/**
	 * This method will animate a count up using JS.
	 * 
	 * @param start The starting number.
	 * @param amount The amount to count up from the start.
	 * @param duration The duration in milliseconds it should take.
	 * @param callback The callback that will call every frame.
	 */
	public static countUp(start: number, amount: number, duration: number, callback: Function, completed: Function): void {
		let currentCount = start;
		const frameDuration = this.getFrameDuration(duration, amount);
		const counter = setInterval(() => {
			if ((currentCount + frameDuration.skip) > (start + amount)) {
				currentCount = (start + amount);
			} else {
				currentCount += frameDuration.skip;
			}
			callback(currentCount);
			if (currentCount >= (start + amount)) {
				clearInterval(counter);
				completed();
			}
		}, Math.floor(frameDuration.duration));
	}

	/**
	 * This method will animate a count down using JS.
	 * 
	 * @param start The starting number.
	 * @param amount The amount to count down from the start.
	 * @param duration The duration in milliseconds it should take.
	 * @param callback The callback that will call every frame.
	 */
	public static countDown(start: number, amount: number, duration: number, callback: Function, completed: Function): void {
		let currentCount = start;
		const frameDuration = this.getFrameDuration(duration, amount);
		const counter = setInterval(() => {
			if ((currentCount - frameDuration.skip) < (start - amount)) {
				currentCount = (start - amount);
			} else {
				currentCount -= frameDuration.skip;
			}
			callback(currentCount);
			if (currentCount <= (start - amount)) {
				clearInterval(counter);
				completed();
			}
		}, Math.floor(frameDuration.duration));
	}

	/**
	 * This method will take a duration and the amount of frames, and find
	 * a valid duration and skip amount that does not fall below zero, due
	 * to setInterval not understanding less than 1. It will return with a
	 * duration and skip amount.
	 * 
	 * @param duration The duration in milliseconds.
	 * @param amount The amount of frames.
	 * @returns Object
	 */
	private static getFrameDuration(duration: number, amount: number): any {
		let frameDuration = duration / amount;
		let frameSkip = 1;
		while (frameDuration < 1) {
			frameSkip++;
			frameDuration = duration / (amount / frameSkip);
		}
		return { duration: frameDuration, skip: frameSkip };
	}
}