require 'bundler/setup'
require 'sinatra'
require 'haml'
require 'sass'

set :haml, :format => :html5

get '/' do
  haml :index
end

get '/stylesheet.css' do
  sass :stylesheet
end