class Api::FigurinesController < ApplicationController

    before_action :set_figurine, only: [:show, :update, :destroy]
    
    def index
        render json: Figurine.all 
    end

    def costIndex 
        sortedFigurines = Figurine.all.sort_by { |figurine| figurine.price }

        render json: sortedFigurines
    end 

    def create
        figurine = Figurine.new(figurine_params)
        if figurine.save
            render json: figurine
        else
            render json: { message: @figurine.errors }, status: 400 
        end
    end

    def show
        render json: @figurine
    end

    def update
        if @figurine.update(figurine_params)
            render json: @figurine
        else
            render json: { message: @figurine.errors }, status: 400 
        end
    end

    def destroy
        if @figurine.destroy
            render json: { message: "It was successfully deleted!!" }, status: 204
        else
            render json: { message: "Unable to destroy figurine" }, status: 400
        end
    end


    private

    def set_figurine
        @figurine = Figurine.find_by(id: params[:id])
    end

    def figurine_params
        params.require(:figurine).permit(:name, :price, :img_url, :size)
    end

end
