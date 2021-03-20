import { ITheme } from '@/interface/theme';

export class ThemeEngine {

	protected static theme: ITheme;

	public static setTheme(theme: ITheme): boolean {
		this.theme = theme;
		return true;
	}
}