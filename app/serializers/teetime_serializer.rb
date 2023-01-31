class TeetimeSerializer < ActiveModel::Serializer
  attributes :id, :time, :date, :players, :price, :holes, :user_id, :course_id, :user_id, :course, :status
end
