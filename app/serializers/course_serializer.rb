class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :par, :holes, :length, :description, :img
end
