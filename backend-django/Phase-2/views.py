from . serializers import BlogSerializer

from home.models import Blog, Review

from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def blog(request):
    if request.method == 'GET':
        data = Blog.objects.all()
        serializer = BlogSerializer(data, many=True)
        return Response(serializer.data)
    

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def get_blog(request, pk):
    try:
        blog = Blog.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)

    if request.method == 'POST':
        user = request.user
        data = request.data

        review,created = Review.objects.get_or_create(
            voter = user,
            blog = blog
        )

        review.vote_type = data['type']
        review.save()

        blog.set_count

        serializer = BlogSerializer(blog, many=False)
        return Response(serializer.data)

    
 








