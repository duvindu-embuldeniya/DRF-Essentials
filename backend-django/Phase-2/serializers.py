from home.models import Tag, Blog, Review
from rest_framework import serializers
from django.contrib.auth.models import User




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'




class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'




class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'




class BlogSerializer(serializers.ModelSerializer):

    tags = TagSerializer(many=True)
    owner = UserSerializer(many=False)
    reviews = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = '__all__'
    
    def get_reviews(self, object):
        reviews = object.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data