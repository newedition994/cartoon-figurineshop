class Api::FigurinesController < ApplicationController

    def index
        render json: Figurine.all
    end

end
