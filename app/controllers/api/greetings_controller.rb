class Api::GreetingsController < ApplicationController
    def index
      @greeting = Greeting.order('RANDOM()').first
      render json: { message: @greeting.greeting }
    end
  end