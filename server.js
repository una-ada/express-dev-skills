/**
 * Main server script.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 */

/*----- Imports --------------------------------------------------------------*/
const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  methodOverride = require('method-override'),
  indexRouter = require('./routes/index'),
  skillsRouter = require('./routes/skills');

/*----- Initialize -----------------------------------------------------------*/
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*----- Routers --------------------------------------------------------------*/
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

/*----- Errors ---------------------------------------------------------------*/
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/*----- Exports --------------------------------------------------------------*/
module.exports = app;
