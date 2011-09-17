require 'bundler/setup'
require 'sinatra'

# SETTINGS
set :haml, :format => :html5

# MAIN PAGE
get '/' do haml :'haml/index' end

# TABS
get '/tab1' do haml :'haml/tab1' end
get '/tab2' do haml :'haml/tab2' end

# STYLESHEETS
get '/application.css' do sass :'sass/application' end
get '/map.css' do sass :'sass/map' end
  
# JS
get "/application.js" do coffee :'coffee/application' end