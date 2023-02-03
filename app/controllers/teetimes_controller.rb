class TeetimesController < ApplicationController

    def create
        tee = Teetime.create!(time: params[:time], date: params[:date], players: params[:players], price: params[:price], holes: params[:holes], user_id: params[:user_id], course_id: params[:course_id], status: params[:status])
        render json: tee
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end 

    def index
        time = Teetime.all
        render json: time
    end 

    def show 
        time = Course.find_by(id: params[:id])
        render json: time.teetimes
    end 

    def update
        time = Teetime.find_by(id: params[:id])
        time.update(status: params[:status])
        # timey = time.user_id
        # user = User.find_by(id: timey)
        # tee = user.teetimes
        render json: time
        
    end 

    def destroy
        time = Teetime.find_by(id: params[:id])
        timey = time.user_id
        user = User.find_by(id: timey)
        tee = user.teetimes
        timme = tee.where(status:  "Posted")
        time.destroy
        render json: timme
    end 

    def hello
        time = Teetime.find_by(id: params[:id])
       render json: time.course
    end 

    def time 
        time = Teetime.find_by(id: params[:id])
        render json: time
    end 

    private 

    def find_time
        Teetime.find(params[:id])
    end 

    def time_params 
        params.permit(:status)
    end 
end