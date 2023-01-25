class CoursesController < ApplicationController

    def create 
        course = Course.create!(course_params)
        render json: course, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: [invalid.record.errors] }, status: :unprocessable_entity
    end 

    def index 
        courses = Course.all
        render json: courses 
    end 

    def destroy
        course = find_course
        course.destroy
        head :no_content
    end 

    def show 
        course = Course.find_by(id: params[:id])
        render json: course 
    end 

    private 

    def course_params 
        params.permit(:name, :location, :par, :holes, :length, :description, :img)
    end 

    def find_course
        Course.find(params[:id])
    end 
end
