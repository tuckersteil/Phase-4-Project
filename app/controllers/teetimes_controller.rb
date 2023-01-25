class TeetimesController < ApplicationController

    def create
        tee = Teetime.create!(time: params[:time], date: params[:date], players: params[:players], price: params[:price], holes: params[:holes], user_id: params[:user_id], course_id: params[:course_id])
        render json: tee
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end 
end
