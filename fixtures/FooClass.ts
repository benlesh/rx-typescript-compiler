import BarClass from './BarClass.ts';

export default class FooClass {
	getBar() : BarClass {
		return new BarClass();
	}
}