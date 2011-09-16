require 'bundler/setup'
require 'sinatra'
require 'haml'
require 'sass'

set :haml, :format => :html5

get '/' do
  haml :index
end

# TABS
get '/tab1' do haml :tab1 end
get '/tab2' do haml :tab2 end
get '/tab3' do haml :tab3 end

# STYLESHEETS
get '/stylesheet.css' do sass :stylesheet end
get '/map.css' do sass :map end