import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.tsx',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'dist/main.bundle.js',
		globals: {
			'react': 'React',
			'react-dom': 'ReactDOM',
		},
	},
	external: ['react', 'react-dom'],
	plugins: [
		typescript(),
		// live reload if dev
		!production && livereload(),
		// minify if prod
		production && terser()
	],
	watch: {
		clearScreen: true
	}
};