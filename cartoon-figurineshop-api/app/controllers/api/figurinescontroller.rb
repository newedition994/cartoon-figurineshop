class Api::FigurinesController < ApplicationController

    # figure out what the Route Error is within the server
    def index
        render json: Figurine.all
    end

end
