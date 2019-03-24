from .models import Sale
from rest_framework import viewsets, permissions
from .serializers import SaleSerializer

# SalesTracker Viewset
class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SaleSerializer