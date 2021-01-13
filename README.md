# GR0 WP Starter

## Steps to begin development
1. Clone this repository.
   
   ```shell
   git clone https://github.com/gr0-autt/gr0-wp-starter.git
   ```
2. Start the Docker container
   
   ```shell
   docker-compose up
   ```
3. Open a browser and navigate to `http://localhost:8000/`
4. Follow the prompts to install Wordpress.
5. Once Wordpress has been installed, copy the contents of the `starter-theme/` folder to `wp-content/themes/<your theme name>`.

   ```shell
   cp -r starter-theme/ wp-content/themes/<your theme name>
   ```
6. Update the `gulp.json` file with your theme name.
7. Run `npm install` to install the required Node libraries
8. Run `npm run dev` to begin developing the theme.